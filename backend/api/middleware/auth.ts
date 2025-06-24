import type { VercelRequest, VercelResponse } from '@vercel/node';
import { config } from 'dotenv';
import crypto from 'crypto';

// Load environment variables
config();

// Get the shared API secret key that's already set in both frontend and backend
const API_SECRET_KEY = process.env.API_SECRET_KEY;

// A fixed token expiration time (5 minutes)
const TOKEN_EXPIRATION = 5 * 60 * 1000; // 5 minutes in milliseconds

// In-memory store of failed authentication attempts
// In production, consider using Redis or a similar distributed cache
interface AuthAttempt {
  count: number;
  lastAttempt: number;
  blocked: boolean;
  blockedUntil: number;
}
const authAttempts = new Map<string, AuthAttempt>();

// Maximum login attempts before rate limiting / blocking
const MAX_AUTH_ATTEMPTS = 5;
// Block duration after exceeding max attempts (30 minutes)
const BLOCK_DURATION = 30 * 60 * 1000;

// Enable debug mode for development environments
const DEBUG = process.env.NODE_ENV !== 'production';

/**
 * Enhanced security function to validate requests from the frontend using:
 * - Shared secret key verification
 * - Request signature validation
 * - Timestamp validation to prevent replay attacks
 * - IP-based rate limiting
 * - Origin validation
 */
export function requireAuth(req: VercelRequest, res: VercelResponse, next: () => void) {
  try {
    // No API secret key configured - log a warning and allow (development only)
    if (!API_SECRET_KEY) {
      console.warn('WARNING: No API_SECRET_KEY environment variable set. API endpoints are not secure!');
      return next();
    }
    
    // Get the client IP address for rate limiting
    const clientIp = 
      (req.headers['x-forwarded-for'] as string)?.split(',')[0].trim() || 
      req.socket.remoteAddress || 
      'unknown';
    
    // Check if this IP is currently blocked due to too many failed attempts
    const attempt = authAttempts.get(clientIp);
    if (attempt && attempt.blocked && Date.now() < attempt.blockedUntil) {
      return res.status(429).json({
        error: 'Too Many Requests',
        message: 'Too many failed authentication attempts. Try again later.',
        retryAfter: Math.ceil((attempt.blockedUntil - Date.now()) / 1000)
      });
    }
    
    // Get authentication headers
    const timestamp = req.headers['x-request-timestamp'] as string;
    const signature = req.headers['x-signature'] as string;
    
    // Check if required headers are present
    if (!timestamp || !signature) {
      if (DEBUG) {
        console.warn(`Auth failed: Missing headers - timestamp: ${!!timestamp}, signature: ${!!signature}`);
      }
      recordFailedAttempt(clientIp);
      return res.status(401).json({
        error: 'Unauthorized',
        message: 'Missing authentication headers'
      });
    }
    
    // SECURITY ENHANCEMENT: Origin validation
    const requestOrigin = req.headers.origin || req.headers.referer;
    const validOrigins = process.env.ALLOWED_ORIGINS ? 
      process.env.ALLOWED_ORIGINS.split(',') : 
      (process.env.FRONTEND_URL ? [process.env.FRONTEND_URL] : []);
      
    // Optional origin validation when Origin header is present
    if (requestOrigin && !isValidOrigin(requestOrigin, validOrigins)) {
      if (DEBUG) {
        console.warn(`Auth failed: Invalid origin - ${requestOrigin} not in [${validOrigins.join(', ')}]`);
      }
      recordFailedAttempt(clientIp);
      return res.status(403).json({
        error: 'Forbidden',
        message: 'Invalid request origin'
      });
    }
    
    // Validate timestamp to prevent replay attacks
    if (!isValidTimestamp(timestamp)) {
      if (DEBUG) {
        console.warn(`Auth failed: Invalid timestamp - ${timestamp}`);
      }
      recordFailedAttempt(clientIp);
      return res.status(401).json({
        error: 'Unauthorized',
        message: 'Request expired or invalid timestamp'
      });
    }
    
    // Get the normalized path for signature verification
    const method = req.method;
    const path = getNormalizedPath(req);
    
    // Create the message to verify
    // Format: [HTTP method]:[path]:[timestamp]
    const message = `${method}:${path}:${timestamp}`;
    
    if (DEBUG) {
      console.log(`Auth message to verify: "${message}"`);
    }
    
    // Verify the request signature
    const expectedSignature = crypto.createHmac('sha256', API_SECRET_KEY)
      .update(message)
      .digest('hex');
    
    // Use constant-time comparison to prevent timing attacks
    let isValidSignature = false;
    try {
      isValidSignature = crypto.timingSafeEqual(
        Buffer.from(signature),
        Buffer.from(expectedSignature)
      );
    } catch (e) {
      // If lengths don't match, timingSafeEqual throws
      isValidSignature = false;
    }
    
    if (!isValidSignature) {
      if (DEBUG) {
        console.warn(`Auth failed: Invalid signature`);
        console.warn(`Expected: ${expectedSignature}`);
        console.warn(`Received: ${signature}`);
      }
      recordFailedAttempt(clientIp);
      return res.status(401).json({
        error: 'Unauthorized',
        message: 'Invalid signature'
      });
    }
    
    // If we reach here, the request is valid - reset failed attempts
    authAttempts.delete(clientIp);
    
    // Successful auth - append a timestamp to the response for logging
    res.setHeader('X-Auth-Time', Date.now().toString());
    
    // Continue to the next middleware or handler
    next();
  } catch (error) {
    // Log the error, but don't expose it to the client
    console.error('Authentication error:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'An error occurred during authentication'
    });
  }
}

/**
 * Helper to normalize the request path for signature verification
 * This ensures frontend and backend use the same path format
 */
function getNormalizedPath(req: VercelRequest): string {
  // Start with the base URL path
  let path = req.url || '';
  
  // Handle Vercel-specific path formats
  if (path.startsWith('/api/')) {
    // Already in the right format
  } else if (path.includes('?')) {
    // Has query parameters - need to extract just the path
    path = path.split('?')[0];
  }
  
  // Include query string if present
  if (req.url && req.url.includes('?')) {
    const queryString = req.url.substring(req.url.indexOf('?'));
    if (!path.includes('?')) {
      path += queryString;
    }
  }
  
  if (DEBUG) {
    console.log(`Original URL: ${req.url}, Normalized path: ${path}`);
  }
  
  return path;
}

// Helper function to record a failed authentication attempt
function recordFailedAttempt(ip: string): void {
  const now = Date.now();
  const attempt = authAttempts.get(ip) || { count: 0, lastAttempt: 0, blocked: false, blockedUntil: 0 };
  
  // Reset counter if last attempt was more than block duration ago
  if (now - attempt.lastAttempt > BLOCK_DURATION) {
    attempt.count = 1;
    attempt.blocked = false;
  } else {
    attempt.count++;
  }
  
  attempt.lastAttempt = now;
  
  // Block IP if too many failed attempts
  if (attempt.count >= MAX_AUTH_ATTEMPTS) {
    attempt.blocked = true;
    attempt.blockedUntil = now + BLOCK_DURATION;
    if (DEBUG) {
      console.warn(`IP ${ip} blocked until ${new Date(attempt.blockedUntil).toISOString()} after ${attempt.count} failed attempts`);
    }
  }
  
  authAttempts.set(ip, attempt);
  
  // Security enhancement: Periodically clean up old entries
  if (Math.random() < 0.01) { // 1% chance on each request to clean up
    for (const [ip, data] of authAttempts.entries()) {
      if (now - data.lastAttempt > BLOCK_DURATION * 2) {
        authAttempts.delete(ip);
      }
    }
  }
}

// Helper function to validate request origin
function isValidOrigin(origin: string, validOrigins: string[]): boolean {
  try {
    const url = new URL(origin);
    return validOrigins.some(validOrigin => {
      try {
        const validUrl = new URL(validOrigin);
        return url.hostname === validUrl.hostname;
      } catch {
        // If validOrigin is not a valid URL, try direct comparison
        return origin.includes(validOrigin);
      }
    });
  } catch {
    return false;
  }
}

// Helper function to validate timestamp (prevent replay attacks)
function isValidTimestamp(timestamp: string): boolean {
  try {
    const requestTime = parseInt(timestamp, 10);
    const now = Date.now();
    // Request must be within the last 5 minutes
    return !isNaN(requestTime) && 
           now - requestTime < TOKEN_EXPIRATION && 
           requestTime <= now;
  } catch {
    return false;
  }
}

// Helper function to apply authentication to a handler
export function withAuth(handler: (req: VercelRequest, res: VercelResponse) => Promise<any>) {
  return async (req: VercelRequest, res: VercelResponse) => {
    return new Promise<void>((resolve) => {
      requireAuth(req, res, async () => {
        await handler(req, res);
        resolve();
      });
    });
  };
}