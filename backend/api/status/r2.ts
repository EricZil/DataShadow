import type { VercelRequest, VercelResponse } from '@vercel/node';
import { S3Client, HeadBucketCommand } from '@aws-sdk/client-s3';
import helmet from 'helmet-csp';
import { config } from 'dotenv';

// --- Environment & Configuration ---
config();
const {
    CLOUDFLARE_ACCOUNT_ID,
    R2_BUCKET_NAME,
    R2_ACCESS_KEY_ID,
    R2_SECRET_ACCESS_KEY,
    FRONTEND_URL
} = process.env;
if (!FRONTEND_URL) {
    throw new Error('FRONTEND_URL is not defined');
}

// --- S3 Client Initialization ---
if (!CLOUDFLARE_ACCOUNT_ID || !R2_BUCKET_NAME || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY) {
    throw new Error("Missing R2 environment variables.");
}

const s3 = new S3Client({
    region: 'auto',
    endpoint: `https://${CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: R2_ACCESS_KEY_ID,
        secretAccessKey: R2_SECRET_ACCESS_KEY,
    },
});

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

    try {
        // Check if the bucket exists and is accessible
        const command = new HeadBucketCommand({ Bucket: R2_BUCKET_NAME });
        await s3.send(command);
        
        // For BetterStack uptime monitoring, we can include a specific keyword
        // that can be checked in the "URL contains a keyword" option
        return res.status(200).json({
            status: "ok",
            message: "R2_OPERATIONAL",
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('R2 Status Check Failed:', error);
        
        // Return a 503 Service Unavailable when R2 is not accessible
        return res.status(503).json({
            status: "error",
            message: "R2_NOT_OPERATIONAL",
            timestamp: new Date().toISOString()
        });
    }
} 