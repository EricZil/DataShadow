import type { VercelRequest, VercelResponse } from '@vercel/node';
import helmet from 'helmet-csp';
import { config } from 'dotenv';

// --- Environment & Configuration ---
config();
const { FRONTEND_URL } = process.env;

if (!FRONTEND_URL) {
    throw new Error('FRONTEND_URL is not defined');
}

const frontendUrl: string = FRONTEND_URL;

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
    res.setHeader('Access-Control-Allow-Origin', frontendUrl);
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
        return res.status(204).end();
    }

    // Available endpoints - only showing public, documented endpoints
    const publicEndpoints = [
        {
            path: '/api',
            description: 'API Root - Information about available endpoints'
        },
        {
            path: '/api/status',
            description: 'General API health check endpoint'
        },
        {
            path: '/api/status/r2',
            description: 'Storage connectivity status check'
        },
        {
            path: '/api/status/notion',
            description: 'Notion API connectivity status check'
        }
    ];

    // API information
    const apiInfo = {
        name: 'DataShadow API',
        version: process.env.npm_package_version || '1.0.0',
        status: 'operational',
        message: 'Welcome to the DataShadow API',
        description: 'A secure API for checking if your data has been compromised in known data breaches',
        documentation: 'Access to search functionality is available through the web interface only. Direct API access requires authentication.',
        endpoints: publicEndpoints,
        timestamp: new Date().toISOString()
    };

    // Check if request is from a browser (Accept header includes text/html)
    const acceptHeader = req.headers.accept || '';
    const wantsBrowser = acceptHeader.includes('text/html');

    if (wantsBrowser) {
        const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${apiInfo.name}</title>
            <style>
                body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                }
                h1 {
                    color: #0070f3;
                    border-bottom: 1px solid #eaeaea;
                    padding-bottom: 10px;
                }
                .status {
                    display: inline-block;
                    padding: 5px 10px;
                    border-radius: 4px;
                    background-color: #0070f3;
                    color: white;
                    font-weight: 500;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 20px 0;
                }
                th, td {
                    text-align: left;
                    padding: 12px;
                    border-bottom: 1px solid #eaeaea;
                }
                th {
                    background-color: #f7f7f7;
                }
                a {
                    color: #0070f3;
                    text-decoration: none;
                }
                a:hover {
                    text-decoration: underline;
                }
                .footer {
                    margin-top: 30px;
                    color: #666;
                    font-size: 0.9em;
                }
                .note {
                    background-color: #f8f9fa;
                    border-left: 4px solid #0070f3;
                    padding: 15px;
                    margin: 20px 0;
                }
                .warning {
                    background-color: #fff8f8;
                    border-left: 4px solid #e53e3e;
                    padding: 15px;
                    margin: 20px 0;
                }
            </style>
        </head>
        <body>
            <h1>${apiInfo.name}</h1>
            <p>${apiInfo.message}</p>
            <p>${apiInfo.description}</p>
            <p>Version: <strong>${apiInfo.version}</strong> | Status: <span class="status">${apiInfo.status}</span></p>
            
            <div class="note">
                <strong>Note:</strong> For security reasons, data breach search functionality is available through our web interface only. 
                Direct API access to search endpoints requires authentication. Please visit our frontend application to use the service.
            </div>
            
            <h2>Public Endpoints</h2>
            <table>
                <thead>
                    <tr>
                        <th>Path</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    ${publicEndpoints.map(endpoint => `
                    <tr>
                        <td><code>${endpoint.path}</code></td>
                        <td>${endpoint.description}</td>
                    </tr>
                    `).join('')}
                </tbody>
            </table>
            
            <h2>Status Monitoring</h2>
            <p>Our API health can be monitored through the following endpoints:</p>
            <ul>
                <li><a href="/api/status">/api/status</a> - General API health</li>
                <li><a href="/api/status/r2">/api/status/r2</a> - Storage connectivity</li>
                <li><a href="/api/status/notion">/api/status/notion</a> - Notion integration</li>
            </ul>
            
            <div class="footer">
                <p>Last updated: ${new Date().toLocaleString()}</p>
                <p>Built with ❤️ by Eric</p>
            </div>
        </body>
        </html>
        `;
        
        res.setHeader('Content-Type', 'text/html');
        return res.status(200).send(html);
    } else {
        // Return limited JSON for API clients
        return res.status(200).json(apiInfo);
    }
} 