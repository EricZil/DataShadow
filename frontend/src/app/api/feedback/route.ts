import { Client } from '@notionhq/client';
import { NextResponse } from 'next/server';

// Initialize the Notion client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
  notionVersion: '2022-06-28'
});

export async function POST(request: Request) {
  const payload = await request.json();
  const { feedbackType, message, email } = payload;

  console.log("📨 Received feedback submission:", JSON.stringify(payload, null, 2));

  try {
    if (!process.env.NOTION_API_KEY || !process.env.NOTION_DATABASE_ID) {
      console.error('❌ CONFIG ERROR: Missing Notion API Key or Database ID in .env.local');
      return NextResponse.json(
        { error: 'Server configuration error. Please check environment variables.' },
        { status: 500 }
      );
    }

    if (!message) {
      return NextResponse.json(
        { error: 'Message content is required.' },
        { status: 400 }
      );
    }

    const feedbackTypeMap: { [key: string]: string } = {
        bug: '🐛 Bug Report',
        feature: '💡 Feature Request',
        general: '💬 General Feedback',
    };

    const response = await notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_ID },
      properties: {
        Title: {
          title: [
            {
              text: {
                content: `New Feedback: ${feedbackTypeMap[feedbackType] || 'General'}`,
              },
            },
          ],
        },
        'Feedback Type': {
            select: {
                name: feedbackTypeMap[feedbackType] || '💬 General Feedback',
            },
        },
        Email: {
          email: email || null,
        },
        Message: {
            rich_text: [
                {
                    text: {
                        content: message,
                    },
                },
            ],
        },
        Status: {
            select: {
                name: '📥 New',
            },
        },
        Date: {
            date: {
                start: new Date().toISOString(),
            },
        }
      },
    });

    console.log("✅ Successfully sent feedback to Notion.");
    return NextResponse.json({ success: true, data: response }, { status: 201 });
  } catch (error) {
    let errorDetails: string | unknown = 'An unknown error occurred.';
    
    if (error instanceof Error) {
        if ('body' in error && typeof (error as { body: string }).body === 'string') {
            try {
                errorDetails = JSON.parse((error as { body: string }).body);
            } catch {
                errorDetails = (error as { body: string }).body;
            }
        } else {
            errorDetails = error.message;
        }
    }

    console.error('❌ NOTION API ERROR:', {
        message: 'Failed to send feedback to Notion.',
        errorDetails: errorDetails,
        requestPayload: payload,
    });
    return NextResponse.json(
      { error: 'Failed to send feedback to Notion.' },
      { status: 500 }
    );
  }
} 