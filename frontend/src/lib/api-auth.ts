/**
 * API Authentication Utilities
 * 
 * This module provides functions for securely signing API requests
 * using the shared API_SECRET_KEY between frontend and backend.
 */

import CryptoJS from 'crypto-js';
let nodeCrypto: typeof import('crypto') | undefined;
if (typeof window === 'undefined') {
  // Only import in Node.js/SSR; dynamic import is safe here
  nodeCrypto = await import('crypto');
}

// In the browser environment, we need to use a crypto library
// For this example, we'll use a placeholder implementation
// In production, use a library like crypto-js
function hmacSha256(message: string, key: string): string {
  if (typeof window !== 'undefined') {
    // Browser environment - use CryptoJS for secure HMAC
    return CryptoJS.HmacSHA256(message, key).toString(CryptoJS.enc.Hex);
  } else {
    // Server-side environment (Next.js SSR) - use Node.js crypto
    if (!nodeCrypto) throw new Error('crypto module not loaded');
    return nodeCrypto
      .createHmac('sha256', key)
      .update(message)
      .digest('hex');
  }
}

/**
 * Generate authentication headers for API requests
 * 
 * @param method - HTTP method (GET, POST, etc.)
 * @param path - API endpoint path
 * @returns Object containing the authentication headers
 */
export function signApiRequest(method: string, path: string): Record<string, string> {
  const timestamp = Date.now().toString();
  
  // Extract just the path part if a full URL was provided
  let pathOnly = path;
  try {
    // Check if it's a full URL (starts with http or https)
    if (path.startsWith('http')) {
      const url = new URL(path);
      pathOnly = url.pathname + url.search;
    }
  } catch {
    // Not a valid URL, use path as is
    console.warn('Could not parse URL, using path as provided');
  }
  
  const message = `${method}:${pathOnly}:${timestamp}`;
  
  // The shared secret key name is API_SECRET_KEY
  const apiKey = 
    process.env.API_SECRET_KEY || 
    '';
  
  if (!apiKey) {
    console.warn('API_SECRET_KEY is not set - API requests will fail authentication');
  }
  
  const signature = hmacSha256(message, apiKey);
  
  return {
    'X-Request-Timestamp': timestamp,
    'X-Signature': signature
  };
}

/**
 * Helper to make authenticated API requests
 * 
 * @param path - API endpoint path
 * @param options - Fetch options
 * @returns Promise with the fetch response
 */
export async function fetchWithAuth(
  path: string, 
  options: RequestInit = {}
): Promise<Response> {
  const method = options.method || 'GET';
  const authHeaders = signApiRequest(method, path);
  
  const response = await fetch(path, {
    ...options,
    headers: {
      ...options.headers,
      ...authHeaders,
    }
  });
  
  // Check for authentication errors
  if (response.status === 401) {
    console.error('Authentication failed. Check that API_SECRET_KEY is correctly set in both frontend and backend.');
  }
  
  return response;
}

/**
 * Example usage:
 * 
 * // Simple GET request
 * const breaches = await fetchWithAuth('/api/some-endpoint')
 *   .then(res => res.json());
 * 
 * // POST request with body
 * const result = await fetchWithAuth('/api/another-endpoint', {
 *   method: 'POST',
 *   headers: { 'Content-Type': 'application/json' },
 *   body: JSON.stringify({ data: 'value' })
 * }).then(res => res.json());
 */ 