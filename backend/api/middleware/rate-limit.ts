import type { VercelRequest, VercelResponse } from '@vercel/node';

// Simple in-memory rate limiting
// In production, this should be replaced with a Redis-based solution
// for distributed rate limiting across serverless functions
const ipRequestCounts = new Map<string, { count: number, resetTime: number }>();

// Configure rate limiting
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute window
const MAX_REQUESTS_PER_WINDOW = 60; // 60 requests per minute

export function rateLimit(req: VercelRequest, res: VercelResponse, next: () => void) {
  // Get client IP - in Vercel, this is typically in the x-forwarded-for header
  const clientIp = 
    (req.headers['x-forwarded-for'] as string)?.split(',')[0].trim() || 
    'unknown';
  
  const now = Date.now();
  
  // Get or create rate limit data for this IP
  let rateLimitData = ipRequestCounts.get(clientIp);
  if (!rateLimitData || now > rateLimitData.resetTime) {
    // First request or window expired, create new entry
    rateLimitData = { count: 1, resetTime: now + RATE_LIMIT_WINDOW };
    ipRequestCounts.set(clientIp, rateLimitData);
  } else {
    // Increment request count
    rateLimitData.count++;
  }
  
  // Set rate limit headers
  res.setHeader('X-RateLimit-Limit', MAX_REQUESTS_PER_WINDOW);
  res.setHeader('X-RateLimit-Remaining', Math.max(0, MAX_REQUESTS_PER_WINDOW - rateLimitData.count));
  res.setHeader('X-RateLimit-Reset', Math.ceil(rateLimitData.resetTime / 1000));
  
  // Check if rate limit exceeded
  if (rateLimitData.count > MAX_REQUESTS_PER_WINDOW) {
    res.status(429).json({
      error: 'Too many requests, please try again later',
      retryAfter: Math.ceil((rateLimitData.resetTime - now) / 1000)
    });
    return;
  }
  
  // Clean up old entries periodically
  if (Math.random() < 0.01) { // 1% chance on each request to clean up
    const cleanupTime = now;
    for (const [ip, data] of ipRequestCounts.entries()) {
      if (data.resetTime < cleanupTime) {
        ipRequestCounts.delete(ip);
      }
    }
  }
  
  // Continue to the next middleware or handler
  next();
}

// Helper function to apply rate limiting to a handler
export function withRateLimit(handler: (req: VercelRequest, res: VercelResponse) => Promise<any>) {
  return async (req: VercelRequest, res: VercelResponse) => {
    return new Promise<void>((resolve) => {
      rateLimit(req, res, async () => {
        await handler(req, res);
        resolve();
      });
    });
  };
} 