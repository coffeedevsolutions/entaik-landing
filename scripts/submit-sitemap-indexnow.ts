/**
 * Script to submit entire sitemap to IndexNow
 * Run this when you make significant site-wide changes
 * 
 * Usage: npx tsx scripts/submit-sitemap-indexnow.ts
 */

import { submitSitemap } from '../lib/indexnow';

async function main() {
  console.log('🚀 Starting IndexNow sitemap submission...\n');
  
  const results = await submitSitemap();
  
  console.log('\n📊 Results:');
  results.forEach(result => {
    if (result.success) {
      console.log(`  ✅ ${result.engine}: Success (${result.status})`);
    } else {
      console.log(`  ❌ ${result.engine}: Failed - ${result.error || result.status}`);
    }
  });

  const successCount = results.filter(r => r.success).length;
  console.log(`\n✨ Completed: ${successCount}/${results.length} successful submissions`);
  
  process.exit(successCount > 0 ? 0 : 1);
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});

