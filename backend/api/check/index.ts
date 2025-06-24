import type { VercelRequest, VercelResponse } from '@vercel/node';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { config } from 'dotenv';
import validator from 'validator';
import { parse as secureJsonParse } from 'secure-json-parse';
import { withAuth } from '../middleware/auth';

// Types
interface BreachDetails {
    name: string;
    date: string;
    exposedData: string[];
    severity: 'High' | 'Medium' | 'Low';
}

interface BreachDb {
    [id: string]: BreachDetails;
}

// Load environment variables
config();

const {
    CLOUDFLARE_ACCOUNT_ID,
    R2_BUCKET_NAME,
    R2_ACCESS_KEY_ID,
    R2_SECRET_ACCESS_KEY,
    FRONTEND_URL
} = process.env;

// Initialize S3 client for R2
const s3 = new S3Client({
    region: 'auto',
    endpoint: `https://${CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: R2_ACCESS_KEY_ID || '',
        secretAccessKey: R2_SECRET_ACCESS_KEY || '',
    },
});

// Cache for breach database
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
        console.error("Error loading breaches database:", error);
        breachesDb = {}; // Cache empty object on failure to prevent retries
    }
    return breachesDb || {};
}

async function handler(req: VercelRequest, res: VercelResponse) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', FRONTEND_URL || '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Request-Timestamp, X-Signature, Authorization');
    
    if (req.method === 'OPTIONS') {
        return res.status(204).end();
    }

    try {
        // Get prefix and suffix from query parameters
        const { prefix, suffix } = req.query;

        // Validate input parameters
        if (typeof prefix !== 'string') {
            return res.status(400).json({ error: 'Invalid prefix format.' });
        }

        if (typeof suffix !== 'string') {
            return res.status(400).json({ error: 'Invalid suffix format.' });
        }

        // Sanitize inputs using validator
        const sanitizedPrefix = validator.escape(prefix);
        const sanitizedSuffix = validator.escape(suffix);

        // Validate format after sanitization
        if (!/^[A-F0-9]{5}$/i.test(sanitizedPrefix)) {
            return res.status(400).json({ error: 'Invalid prefix format. Must be 5 hexadecimal characters.' });
        }
        
        if (!/^[A-F0-9]{30,}$/i.test(sanitizedSuffix)) {
            return res.status(400).json({ error: `Invalid suffix format. Must be at least 30 hexadecimal characters. Got: ${sanitizedSuffix}` });
        }
        
        // Load the breach database
        const db = await getBreachesDb();

        // Convert prefix to uppercase to match the file naming convention
        const upperCasePrefix = sanitizedPrefix.toUpperCase();
        const upperCaseSuffix = sanitizedSuffix.toUpperCase();
        
        // Try different key formats to find the hash file
        const possibleKeys = [
            `pwned-data/${upperCasePrefix}.txt`,  // In pwned-data directory
            `${upperCasePrefix}.txt`,             // Direct in root
        ];
        
        // Try to fetch the file
        let fileContent = null;
        
        for (const key of possibleKeys) {
            const command = new GetObjectCommand({ Bucket: R2_BUCKET_NAME || '', Key: key });
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
            // Return empty array with 200 status, not an error
            console.log(`No file found for prefix: ${upperCasePrefix}`);
            return res.status(200).json([]);
        }
        
        // Search for the suffix in the file
        const lines = fileContent.split('\n');
        const foundBreaches: BreachDetails[] = [];

        for (const line of lines) {
            const trimmedLine = line.trim();
            if (!trimmedLine) continue; // Skip empty lines

            const [lineSuffix, breachId] = trimmedLine.split(':');
            if (lineSuffix === upperCaseSuffix) {
                const breachDetails = db[breachId];
                if (breachDetails) {
                    foundBreaches.push(breachDetails);
                }
            }
        }
        
        // Set caching headers
        res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
        return res.status(200).json(foundBreaches);
    } catch (error: any) {
        console.error('Error processing request:', error);
        return res.status(500).json({ error: 'An internal server error occurred' });
    }
}

// Export with authentication
export default withAuth(handler); 