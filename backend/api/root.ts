import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Redirect to the API index
  res.statusCode = 302;
  res.setHeader('Location', '/api');
  res.end();
} 