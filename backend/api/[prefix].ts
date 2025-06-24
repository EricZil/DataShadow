import type { VercelRequest, VercelResponse } from '@vercel/node';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { config } from 'dotenv';
import { resolve } from 'path';
import helmet from 'helmet-csp';
import validator from 'validator';
import createError from 'http-errors';
import { parse as secureJsonParse } from 'secure-json-parse';
import { withRateLimit } from './middleware/rate-limit';
import { withAuth } from './middleware/auth';

// --- Types ---
interface BreachDetails {
    name: string;
    date: string;
    exposedData: string[];
    severity: 'High' | 'Medium' | 'Low';
}

interface BreachDb {
    [id: string]: BreachDetails;
}

// Explicitly load .env file from the current working directory.
config({ path: resolve(process.cwd(), '.env') });

const {
    CLOUDFLARE_ACCOUNT_ID,
    R2_BUCKET_NAME,
    R2_ACCESS_KEY_ID,
    R2_SECRET_ACCESS_KEY,
    FRONTEND_URL
} = process.env;

// Validate R2 variables and initialize S3 client
if (!CLOUDFLARE_ACCOUNT_ID || !R2_BUCKET_NAME || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY) {
    throw new Error("Missing required environment variables for R2 connection.");
}
const s3 = new S3Client({
    region: 'auto',
    endpoint: `https://${CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: R2_ACCESS_KEY_ID,
        secretAccessKey: R2_SECRET_ACCESS_KEY,
    },
});

// --- Breach Data Loading ---
// We load the breach metadata once and cache it to avoid re-fetching on every request.
let breachesDb: BreachDb | null = null;

async function getBreachesDb(): Promise<BreachDb> {
    if (breachesDb !== null) {
        return breachesDb;
    }

    try {
        if (!R2_BUCKET_NAME) {
            throw new Error("R2_BUCKET_NAME is not defined.");
        }
        const command = new GetObjectCommand({ Bucket: R2_BUCKET_NAME, Key: 'breaches.json' });
        const { Body } = await s3.send(command);
        if (Body) {
            const dbData = await Body.transformToString();
            breachesDb = secureJsonParse(dbData) as BreachDb;
            return breachesDb;
        }
    } catch (error) {
        breachesDb = {};
    }
    return breachesDb || {};
}

async function handler(req: VercelRequest, res: VercelResponse) {
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
        return res.status(204).end();
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
        const { prefix, suffix } = req.query;

        // Validate input parameters
        if (typeof prefix !== 'string') {
            throw createError(400, 'Invalid prefix format.');
        }

        if (typeof suffix !== 'string') {
            throw createError(400, 'Invalid suffix format.');
        }

        // Sanitize inputs using validator
        const sanitizedPrefix = validator.escape(prefix);
        const sanitizedSuffix = validator.escape(suffix);

        // Validate format after sanitization
        if (!/^[A-F0-9]{5}$/i.test(sanitizedPrefix)) {
            throw createError(400, 'Invalid prefix format. Must be 5 hexadecimal characters.');
        }
        
        if (!/^[A-F0-9]{30,}$/i.test(sanitizedSuffix)) {
            throw createError(400, `Invalid suffix format. Must be at least 30 hexadecimal characters. Got: ${sanitizedSuffix}`);
        }
        
        // Load the breach database
        const db = await getBreachesDb();

        // Convert prefix to uppercase to match the file naming convention from the ingestion script
        const upperCasePrefix = sanitizedPrefix.toUpperCase();
        const upperCaseSuffix = sanitizedSuffix.toUpperCase();
        
        // Check if the prefix is in the correct format (5 characters)
        const prefix5Char = upperCasePrefix.length === 5 ? upperCasePrefix : upperCasePrefix.substring(0, 5);
        
        // Try different key formats to find the hash file
        const possibleKeys = [
            `pwned-data/${prefix5Char}.txt`,  // In pwned-data directory (5-char prefix)
            `${prefix5Char}.txt`,             // Direct in root
        ];
        
        // --- Data Fetching (R2) ---
        let fileContent = null;
        
        for (const key of possibleKeys) {
            const command = new GetObjectCommand({ Bucket: R2_BUCKET_NAME, Key: key });
            try {
                const response = await s3.send(command);
                if (response.Body) {
                    fileContent = await response.Body.transformToString();
                    break;
                }
            } catch (error: any) {
                // Continue to the next key if this one fails
                continue;
            }
        }
        
        if (!fileContent) {
            // Return empty array if no file found - don't leak information about what files exist
            return res.status(200).json([]);
        }
        
        // --- Search and Response Generation ---
        const lines = fileContent.split('\n');
        const foundBreaches: BreachDetails[] = [];

        for (const line of lines) {
            // Trim whitespace and invisible characters from each line.
            const trimmedLine = line.trim();
            if (!trimmedLine) continue; // Skip any empty lines

            const [lineSuffix, breachId] = trimmedLine.split(':');
            if (lineSuffix === upperCaseSuffix) {
                const breachDetails = db[breachId];
                if (breachDetails) {
                    foundBreaches.push(breachDetails);
                }
            }
        }
        
        // Set caching headers. Even for dynamic responses, we can cache for a short time.
        res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
        return res.status(200).json(foundBreaches);
    } catch (error: any) {
        // Structured error handling
        if (error.statusCode === 400) {
            return res.status(400).json({ error: error.message });
        }
        
        // Don't expose internal errors to clients
        console.error('Error processing request:', error);
        return res.status(500).json({ error: 'An internal server error occurred' });
    }
}

// Export the handler with both rate limiting and authentication applied
export default withAuth(withRateLimit(handler)); 