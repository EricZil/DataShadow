import type { VercelRequest, VercelResponse } from '@vercel/node';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { Readable } from 'stream';
import { config } from 'dotenv';
import helmet from 'helmet-csp';
import validator from 'validator';
import createError from 'http-errors';
import { withRateLimit } from '../middleware/rate-limit';
import { withAuth } from '../middleware/auth';

// --- Environment & Path Configuration ---
config();
const {
    CLOUDFLARE_ACCOUNT_ID,
    R2_BUCKET_NAME,
    R2_ACCESS_KEY_ID,
    R2_SECRET_ACCESS_KEY,
    FRONTEND_URL
} = process.env;

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
const handler = async (req: VercelRequest, res: VercelResponse): Promise<void> => {
    // Set CORS headers first, before any potential errors
    // Allow requests from the frontend origin or local development
    const allowedOrigins = FRONTEND_URL ? FRONTEND_URL.split(',') : [];
    const origin = req.headers.origin || '';
    
    // Check if the request origin is allowed
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    } else if (allowedOrigins.length > 0) {
        // For requests without an origin header or from unknown origins
        res.setHeader('Access-Control-Allow-Origin', allowedOrigins[0]);
    }
    
    // Allow credentials (cookies, authorization headers)
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    
    // Allow specific HTTP methods
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, POST');
    
    // Allow specific headers in requests
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Request-Timestamp, X-Signature, Authorization');
    
    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
        res.status(204).end();
        return;
    }

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

    try {
        // Get password prefix from URL
        const { prefix } = req.query;

        // Validate and sanitize prefix
        if (!prefix || typeof prefix !== 'string') {
            throw createError(400, 'Password prefix is required');
        }

        const sanitizedPrefix = validator.escape(prefix);
        
        // Validate it's a valid SHA-1 prefix (5 hex chars)
        if (!/^[A-F0-9]{5}$/i.test(sanitizedPrefix)) {
            throw createError(400, 'Invalid prefix format. Must be 5 hexadecimal characters.');
        }

        // Standardize to uppercase for consistency
        const upperPrefix = sanitizedPrefix.toUpperCase();

        // Determine the password file path
        const passwordFilePath = `pwned-passwords/${upperPrefix}.txt`;
        
        // Try to fetch the password file for this prefix
        const command = new GetObjectCommand({
            Bucket: R2_BUCKET_NAME,
            Key: passwordFilePath
        });

        let foundFile = false;
        try {
            const response = await s3.send(command);
            if (response.Body) {
                foundFile = true;
                // Stream the file directly to the client
                // This avoids loading large files into memory
                const fileContent = await response.Body.transformToString();
                
                res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for a day
                res.status(200).send(fileContent);
                return;
            }
        } catch (error) {
            // File not found - continue to 404 response
        }
        
        // If we reach here, no file was found
        if (!foundFile) {
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.setHeader('Cache-Control', 'public, max-age=3600'); // Cache the "not found" response
            res.status(404).send(''); // Send empty body for 404, client will handle it.
            return;
        }
    } catch (error: any) {
        // Structured error handling
        if (error.statusCode === 400) {
            res.status(400).json({ error: error.message });
            return;
        }
        
        // Don't expose internal errors to clients
        console.error('Error processing request:', error);
        res.status(500).json({ error: 'An internal server error occurred' });
        return;
    }
}

// Export handler with both authentication and rate limiting
export default withAuth(withRateLimit(handler)); 