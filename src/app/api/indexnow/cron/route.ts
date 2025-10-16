import { NextRequest, NextResponse } from 'next/server';
import { submitUrls } from '../../../../../lib/indexnow';

/**
 * Vercel Cron Job for IndexNow
 * Runs once daily (2 AM) to submit key pages to search engines
 * 
 * Hobby Plan Limits:
 * - Runs once per day
 * - Execution time may vary within the hour (e.g., 2:00 AM - 2:59 AM)
 * 
 * This is configured in vercel.json:
 * "crons": [{ "path": "/api/indexnow/cron", "schedule": "0 2 * * *" }]
 */
export async function GET(request: NextRequest) {
  try {
    // Verify this is a Vercel Cron request
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    console.log('⏰ Cron job triggered - submitting URLs to IndexNow...');

    // Submit key pages
    const urls = [
      'https://www.uptaik.com',
      'https://www.uptaik.com/features',
      'https://www.uptaik.com/workflows',
      'https://www.uptaik.com/pricing',
      'https://www.uptaik.com/blog',
    ];

    const results = await submitUrls(urls);
    const successCount = results.filter((r: { success: boolean }) => r.success).length;

    console.log(`✅ Cron job completed: ${successCount}/${results.length} successful`);

    return NextResponse.json({
      success: true,
      submitted: urls.length,
      successful: successCount,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('❌ Cron job error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Also support POST for manual triggers
export async function POST(request: NextRequest) {
  return GET(request);
}

