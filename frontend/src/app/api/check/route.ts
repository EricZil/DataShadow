import { NextRequest, NextResponse } from 'next/server';
import { signApiRequest } from '../../../lib/api-auth';

export async function GET(request: NextRequest) {
  try {
    // Get query parameters
    const { searchParams } = new URL(request.url);
    const prefix = searchParams.get('prefix');
    const suffix = searchParams.get('suffix');
    
    if (!prefix || !suffix) {
      return NextResponse.json({ 
        error: 'Missing parameters', 
        message: 'Both prefix and suffix are required' 
      }, { status: 400 });
    }
    
    // Debug log for API route
    console.log('API ROUTE DEBUG:', { prefix, suffix, endpoint: `/api/check?prefix=${prefix}&suffix=${suffix}` });
    
    // Forward the request to the backend check endpoint
    const backendUrl = process.env.BACKEND_API_URL || 'http://localhost:3001';
    const endpoint = `/api/check?prefix=${prefix}&suffix=${suffix}`;
    const authHeaders = signApiRequest('GET', endpoint);
    
    console.log('Making check request to:', `${backendUrl}${endpoint}`);
    
    const response = await fetch(`https://api.datashadow.eryxks.xyz/api/check?prefix=${prefix}&suffix=${suffix}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...authHeaders
      },
    });
    
    if (!response.ok) {
      console.log('Backend check error:', response.status, response.statusText);
      
      // Special handling for 404 status - this just means the email wasn't found in a breach
      if (response.status === 404) {
        return NextResponse.json([]);
      }
      
      // Get the raw text response first to aid debugging
      const rawResponseText = await response.text();
      console.log('Raw response (first 200 chars):', rawResponseText.substring(0, 200));
      
      return NextResponse.json({ 
        error: `Backend check API error: ${response.status}`,
        rawResponse: rawResponseText.substring(0, 500),
        url: `${backendUrl}${endpoint}`
      }, { status: response.status });
    }
    
    // Try to parse the successful response
    try {
      const data = await response.json();
      return NextResponse.json(data);
    } catch (error) {
      console.log('Error parsing check response:', error);
      const text = await response.text();
      return NextResponse.json({ 
        error: 'Failed to parse backend check response as JSON',
        rawResponse: text.substring(0, 500)
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Check API error:', error);
    return NextResponse.json({ 
      error: 'Failed to connect to backend check API', 
      details: error instanceof Error ? error.message : String(error) 
    }, { status: 500 });
  }
} 