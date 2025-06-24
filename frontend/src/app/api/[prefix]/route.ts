import { NextRequest, NextResponse } from 'next/server';
import { signApiRequest } from '../../../lib/api-auth';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ prefix: string }> }
) {
  const { prefix } = await context.params;
  const { searchParams } = new URL(request.url);
  const suffix = searchParams.get('suffix');

  if (!suffix) {
    return NextResponse.json({ error: 'Missing suffix parameter' }, { status: 400 });
  }

  try {
    // Forward the request to the backend
    const backendUrl = process.env.BACKEND_API_URL || '';
    const endpoint = `/api/${prefix}?suffix=${suffix}`;
    const authHeaders = signApiRequest('GET', endpoint);
    
    const response = await fetch(`${backendUrl}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...authHeaders
      },
    });
    
    // Special handling for 404 status - this just means the email wasn't found in a breach
    if (response.status === 404) {
      return NextResponse.json([]);
    }
    
    if (!response.ok) {
      let errorData = {};
      try {
        errorData = await response.json();
      } catch {
        // If we can't parse JSON, just continue
      }
      
      return NextResponse.json(
        { error: `Backend API error: ${response.status}`, details: errorData },
        { status: response.status }
      );
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to connect to backend API', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
} 