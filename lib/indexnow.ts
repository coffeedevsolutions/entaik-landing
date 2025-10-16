/**
 * IndexNow utility for submitting URLs to search engines
 * Automatically notifies Bing, Yandex, and other search engines when content changes
 */

const INDEXNOW_KEY = process.env.INDEXNOW_KEY || 'e689dd92ff36a9f3aadac014fb84a175a3d83c1e11d31e286a587f8a4ec88204';
const HOST = 'www.uptaik.com';

// Search engines that support IndexNow
const SEARCH_ENGINES = [
  'https://www.bing.com/indexnow',
  'https://api.indexnow.org/indexnow', // This submits to all participating search engines
];

interface IndexNowResponse {
  success: boolean;
  engine?: string;
  status?: number;
  error?: string;
}

/**
 * Submit a single URL to search engines via IndexNow
 */
export async function submitUrl(url: string): Promise<IndexNowResponse[]> {
  const results: IndexNowResponse[] = [];

  for (const engine of SEARCH_ENGINES) {
    try {
      const indexNowUrl = `${engine}?url=${encodeURIComponent(url)}&key=${INDEXNOW_KEY}`;
      
      const response = await fetch(indexNowUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      results.push({
        success: response.ok,
        engine,
        status: response.status,
      });

      if (response.ok) {
        console.log(`✅ IndexNow: Successfully submitted ${url} to ${engine}`);
      } else {
        console.error(`❌ IndexNow: Failed to submit ${url} to ${engine} (${response.status})`);
      }
    } catch (error) {
      results.push({
        success: false,
        engine,
        error: error instanceof Error ? error.message : 'Unknown error',
      });
      console.error(`❌ IndexNow: Error submitting ${url} to ${engine}:`, error);
    }
  }

  return results;
}

/**
 * Submit multiple URLs to search engines via IndexNow (max 10,000 per batch)
 */
export async function submitUrls(urls: string[]): Promise<IndexNowResponse[]> {
  const results: IndexNowResponse[] = [];

  // Split into batches of 10,000 if needed
  const batches: string[][] = [];
  for (let i = 0; i < urls.length; i += 10000) {
    batches.push(urls.slice(i, i + 10000));
  }

  for (const batch of batches) {
    for (const engine of SEARCH_ENGINES) {
      try {
        const response = await fetch(engine, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: JSON.stringify({
            host: HOST,
            key: INDEXNOW_KEY,
            urlList: batch,
          }),
        });

        results.push({
          success: response.ok,
          engine,
          status: response.status,
        });

        if (response.ok) {
          console.log(`✅ IndexNow: Successfully submitted ${batch.length} URLs to ${engine}`);
        } else {
          console.error(`❌ IndexNow: Failed to submit URLs to ${engine} (${response.status})`);
        }
      } catch (error) {
        results.push({
          success: false,
          engine,
          error: error instanceof Error ? error.message : 'Unknown error',
        });
        console.error(`❌ IndexNow: Error submitting URLs to ${engine}:`, error);
      }
    }
  }

  return results;
}

/**
 * Submit all URLs from sitemap to IndexNow
 * Use this sparingly - only when you make significant site-wide changes
 */
export async function submitSitemap(): Promise<IndexNowResponse[]> {
  try {
    // Fetch the sitemap
    const sitemapUrl = `https://${HOST}/sitemap.xml`;
    const response = await fetch(sitemapUrl);
    const sitemapXml = await response.text();

    // Extract URLs from sitemap (basic XML parsing)
    const urlMatches = sitemapXml.match(/<loc>(.*?)<\/loc>/g);
    if (!urlMatches) {
      throw new Error('No URLs found in sitemap');
    }

    const urls = urlMatches.map(match => match.replace(/<\/?loc>/g, ''));
    
    console.log(`📡 IndexNow: Submitting ${urls.length} URLs from sitemap...`);
    return await submitUrls(urls);
  } catch (error) {
    console.error('❌ IndexNow: Error submitting sitemap:', error);
    return [{
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }];
  }
}

