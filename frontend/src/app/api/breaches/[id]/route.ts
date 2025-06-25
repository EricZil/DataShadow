import { NextResponse } from 'next/server';
import { getBreach } from '../../../../lib/notion';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    if (!id) {
      return NextResponse.json(
        { error: 'Breach ID is required' },
        { status: 400 }
      );
    }

    const breach = await getBreach(id);
    
    if (!breach) {
      return NextResponse.json(
        { error: 'Breach not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(breach);
  } catch (error) {
    console.error('Error fetching breach:', error);
    return NextResponse.json(
      { error: 'Failed to fetch breach data' },
      { status: 500 }
    );
  }
} 