import { NextRequest, NextResponse } from 'next/server';
import { submitUrls } from '../../../../../lib/indexnow';

/**
 * Vercel Deploy Hook endpoint
 * This endpoint is called automatically after each Vercel deployment
 * 
 * Setup:
 * 1. Go to Vercel Dashboard > Settings > Git > Deploy Hooks
 * 2. Create a new hook pointing to: https://www.uptaik.com/api/indexnow/deploy-hook
 * 3. Vercel will POST to this endpoint after each successful deployment
 */
export async function POST(request: NextRequest) {
  try {
    // Optional: Add authentication
    const authHeader = request.headers.get('authorization');
    const expectedAuth = process.env.DEPLOY_HOOK_SECRET;
    
    if (expectedAuth && authHeader !== `Bearer ${expectedAuth}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    console.log('📡 Deploy hook triggered - submitting key pages to IndexNow...');

    // Submit main pages that change on deployment
    const mainPages = [
      'https://www.uptaik.com',
      'https://www.uptaik.com/features',
      'https://www.uptaik.com/workflows',
      'https://www.uptaik.com/pricing',
      'https://www.uptaik.com/blog',
      'https://www.uptaik.com/request-demo',
      'https://www.uptaik.com/contact',
    ];

    // Submit feature pages
    const featurePages = [
      'https://www.uptaik.com/features/ai-survey-platform',
      'https://www.uptaik.com/features/automated-documentation',
      'https://www.uptaik.com/features/analytics-intelligence',
      'https://www.uptaik.com/features/enterprise-integrations',
    ];

    // Combine all URLs
    const allUrls = [...mainPages, ...featurePages];

    // Submit to IndexNow
    const results = await submitUrls(allUrls);
    const successCount = results.filter((r: { success: boolean }) => r.success).length;

    console.log(`✅ IndexNow deployment hook: ${successCount}/${results.length} submissions successful`);

    return NextResponse.json({
      success: true,
      message: `Submitted ${allUrls.length} URLs to IndexNow`,
      results: {
        total: results.length,
        successful: successCount,
        failed: results.length - successCount,
      },
    });
  } catch (error) {
    console.error('❌ Deploy hook error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

/**
 * GET endpoint for manual testing
 */
export async function GET() {
  return NextResponse.json({
    message: 'IndexNow deploy hook endpoint is active',
    usage: 'POST to this endpoint to trigger IndexNow submission after deployment',
  });
}

