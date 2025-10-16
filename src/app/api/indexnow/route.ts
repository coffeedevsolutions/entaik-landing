import { NextRequest, NextResponse } from 'next/server';
import { submitUrl, submitUrls } from '../../../../lib/indexnow';

/**
 * API route to submit URLs to IndexNow
 * POST /api/indexnow
 * Body: { url: string } or { urls: string[] }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request
    if (!body.url && !body.urls) {
      return NextResponse.json(
        { error: 'Missing url or urls parameter' },
        { status: 400 }
      );
    }

    let results;

    if (body.url) {
      // Submit single URL
      results = await submitUrl(body.url);
    } else if (body.urls && Array.isArray(body.urls)) {
      // Submit multiple URLs
      results = await submitUrls(body.urls);
    } else {
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      );
    }

    const allSuccess = results.every((r: { success: boolean }) => r.success);

    return NextResponse.json(
      {
        success: allSuccess,
        results,
      },
      { status: allSuccess ? 200 : 207 } // 207 = Multi-Status
    );
  } catch (error) {
    console.error('IndexNow API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * GET endpoint for simple URL submission via query params
 * GET /api/indexnow?url=https://www.uptaik.com/blog/new-post
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json(
      { error: 'Missing url parameter' },
      { status: 400 }
    );
  }

  try {
    const results = await submitUrl(url);
    const allSuccess = results.every((r: { success: boolean }) => r.success);

    return NextResponse.json(
      {
        success: allSuccess,
        results,
      },
      { status: allSuccess ? 200 : 207 }
    );
  } catch (error) {
    console.error('IndexNow API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

