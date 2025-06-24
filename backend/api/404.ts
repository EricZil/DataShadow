import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - Page Not Found</title>
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        line-height: 1.6;
        color: #333;
        max-width: 800px;
        margin: 0 auto;
        padding: 40px 20px;
        text-align: center;
      }
      h1 {
        font-size: 3rem;
        margin-bottom: 0;
      }
      .code {
        color: #0070f3;
        font-size: 8rem;
        font-weight: bold;
        margin: 0;
        line-height: 1;
      }
      .message {
        margin-bottom: 40px;
      }
      .home-link {
        display: inline-block;
        background-color: #0070f3;
        color: white;
        padding: 12px 24px;
        border-radius: 4px;
        text-decoration: none;
        font-weight: 500;
        transition: background-color 0.2s;
      }
      .home-link:hover {
        background-color: #005cc5;
      }
    </style>
  </head>
  <body>
    <div class="code">404</div>
    <h1>Page Not Found</h1>
    <p class="message">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
    <a href="/api" class="home-link">Go to API Home</a>
  </body>
  </html>
  `;

  // Check if request wants JSON
  const acceptHeader = req.headers.accept || '';
  if (acceptHeader.includes('application/json')) {
    return res.status(404).json({
      status: "error",
      code: 404,
      message: "Not Found",
      description: "The requested resource could not be found."
    });
  }

  // Otherwise return HTML
  res.setHeader('Content-Type', 'text/html');
  res.status(404).send(html);
} 