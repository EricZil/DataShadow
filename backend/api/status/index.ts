import type { VercelRequest, VercelResponse } from '@vercel/node';
import helmet from 'helmet-csp';
import { config } from 'dotenv';

// --- Environment & Configuration ---
config();
const { FRONTEND_URL } = process.env;
if (!FRONTEND_URL) {
    throw new Error('FRONTEND_URL is not defined');
}

// --- Handler function ---
export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Apply security headers
    helmet({
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'"],
            objectSrc: ["'none'"],
            upgradeInsecureRequests: [],
        }
    })(req, res, () => {});

    // Set additional security headers
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'no-referrer');
    
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', FRONTEND_URL as string);
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
        return res.status(204).end();
    }

    // Create a simple API status response with a keyword for BetterStack monitoring
    return res.status(200).json({
        status: "ok",
        message: "API_OPERATIONAL",
        version: process.env.npm_package_version || "1.0.0",
        timestamp: new Date().toISOString()
    });
} 