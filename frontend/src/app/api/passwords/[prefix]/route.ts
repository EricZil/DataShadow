import { NextRequest, NextResponse } from 'next/server';
import { signApiRequest } from '../../../../lib/api-auth';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ prefix: string }> }
) {
  const { prefix } = await context.params;

  if (!prefix || typeof prefix !== 'string') {
    return NextResponse.json({ error: 'Missing prefix parameter' }, { status: 400 });
  }

  try {
    const backendUrl = process.env.BACKEND_API_URL || '';
    const endpoint = `/api/passwords/${prefix}`;
    const authHeaders = signApiRequest('GET', endpoint);

    const response = await fetch(`${backendUrl}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...authHeaders,
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return new NextResponse('', { status: 200 });
      }

      const errorData = await response.text().catch(() => '');
      return NextResponse.json(
        { error: `Backend API error: ${response.status}`, details: errorData },
        { status: response.status }
      );
    }

    const data = await response.text();
    return new NextResponse(data, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Failed to connect to backend API',
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
