import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Client } from '@notionhq/client';
import helmet from 'helmet-csp';
import { config } from 'dotenv';

// --- Environment & Configuration ---
config();
const { 
    NOTION_API_KEY,
    NOTION_DATABASE_ID,
    FRONTEND_URL
} = process.env;
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

    // Check if Notion is configured
    if (!NOTION_API_KEY || !NOTION_DATABASE_ID) {
        return res.status(503).json({
            status: "error",
            message: "NOTION_NOT_CONFIGURED",
            timestamp: new Date().toISOString()
        });
    }

    try {
        // Initialize Notion client
        const notion = new Client({ auth: NOTION_API_KEY });
        
        // Try to query the Notion API
        await notion.users.me({});

        // If successful, return a 200 OK response
        return res.status(200).json({
            status: "ok",
            message: "NOTION_OPERATIONAL",
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Notion Status Check Failed:', error);
        
        // Return a 503 Service Unavailable when Notion is not accessible
        return res.status(503).json({
            status: "error",
            message: "NOTION_NOT_OPERATIONAL",
            timestamp: new Date().toISOString()
        });
    }
} 