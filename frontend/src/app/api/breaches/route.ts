import { NextResponse } from 'next/server';
import { getAllBreaches } from '../../../lib/notion';

export async function GET() {
  try {
    const breaches = await getAllBreaches();
    return NextResponse.json(breaches);
  } catch (error) {
    console.error('Error fetching breaches:', error);
    return NextResponse.json(
      { error: 'Failed to fetch breaches data' },
      { status: 500 }
    );
  }
} 