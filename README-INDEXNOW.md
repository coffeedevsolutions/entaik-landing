# IndexNow Integration

This project is integrated with IndexNow, a protocol that allows instant notification of search engines when content changes.

## What is IndexNow?

IndexNow is a simple protocol that allows websites to notify participating search engines (Bing, Yandex, etc.) when content is added, updated, or deleted. This helps search engines discover your content faster than traditional crawling.

## Setup

### 1. Key File

The IndexNow key is stored in:
- **Key file**: `/public/e689dd92ff36a9f3aadac014fb84a175a3d83c1e11d31e286a587f8a4ec88204.txt`
- **Environment variable**: `INDEXNOW_KEY` in `.env.local`

### 2. Add to .env.local

```bash
INDEXNOW_KEY=e689dd92ff36a9f3aadac014fb84a175a3d83c1e11d31e286a587f8a4ec88204
```

## Usage

### Automatic Submission via API

**Submit a single URL:**
```bash
curl -X POST https://www.uptaik.com/api/indexnow \
  -H "Content-Type: application/json" \
  -d '{"url": "https://www.uptaik.com/blog/new-post"}'
```

**Submit multiple URLs:**
```bash
curl -X POST https://www.uptaik.com/api/indexnow \
  -H "Content-Type: application/json" \
  -d '{"urls": ["https://www.uptaik.com/blog/post-1", "https://www.uptaik.com/blog/post-2"]}'
```

**Simple GET request:**
```bash
curl "https://www.uptaik.com/api/indexnow?url=https://www.uptaik.com/blog/new-post"
```

### From Your Code

**Server-side (API routes, server actions):**
```typescript
import { submitUrl } from '@/lib/indexnow';

// After publishing a blog post
await submitUrl('https://www.uptaik.com/blog/new-post');
```

**Client-side (React components):**
```typescript
import { useIndexNow } from '@/hooks/useIndexNow';

function MyComponent() {
  const { submitUrl, isSubmitting } = useIndexNow();

  const handlePublish = async () => {
    // ... publish your content
    await submitUrl('https://www.uptaik.com/blog/new-post');
  };
}
```

### Submit Entire Sitemap

When you make significant site-wide changes:

```bash
# Install tsx if you haven't
npm install -D tsx

# Run the script
npx tsx scripts/submit-sitemap-indexnow.ts
```

**⚠️ Use sparingly** - Only run this for major site updates, not for individual content changes.

## Integration Examples

### Example 1: Automatically Submit New Blog Posts

In your blog publishing function:

```typescript
// In your API route or server action
import { submitUrl } from '@/lib/indexnow';

export async function publishBlogPost(slug: string) {
  // ... save the blog post to database/filesystem
  
  // Notify search engines
  const url = `https://www.uptaik.com/blog/${slug}`;
  await submitUrl(url);
  
  return { success: true };
}
```

### Example 2: Submit Updated Pages

```typescript
import { submitUrls } from '@/lib/indexnow';

// After updating multiple pages
const updatedPages = [
  'https://www.uptaik.com/features/ai-survey-platform',
  'https://www.uptaik.com/features/analytics-intelligence',
];

await submitUrls(updatedPages);
```

### Example 3: Using Webhook

Set up a webhook that triggers after content deployment:

```typescript
// /api/webhooks/deploy
import { submitSitemap } from '@/lib/indexnow';

export async function POST(request: Request) {
  // Verify webhook signature...
  
  // Submit all URLs after deployment
  await submitSitemap();
  
  return Response.json({ success: true });
}
```

## Best Practices

1. **Don't spam**: Only submit URLs when content actually changes
2. **Batch submissions**: Submit multiple URLs at once when possible (max 10,000)
3. **Key security**: Keep your IndexNow key private (already in `.env.local`)
4. **Rate limiting**: Most search engines accept submissions every few minutes
5. **Sitemap submissions**: Use sparingly - only for major site updates

## Supported Search Engines

URLs are automatically submitted to:
- ✅ **Bing** (Microsoft)
- ✅ **Yandex**
- ✅ **IndexNow.org API** (distributes to all participating engines)

## Verification

To verify your key is working:

1. Check the key file is accessible: https://www.uptaik.com/e689dd92ff36a9f3aadac014fb84a175a3d83c1e11d31e286a587f8a4ec88204.txt
2. Submit a test URL and check the response
3. Monitor search engine crawl logs

## Troubleshooting

### 403 Forbidden
- Key file not accessible or key doesn't match
- Ensure `/public/[key].txt` contains the correct key

### 422 Unprocessable Entity
- URL doesn't belong to www.uptaik.com
- URL format is invalid

### 429 Too Many Requests
- You're submitting too frequently
- Wait a few minutes before retrying

## Learn More

- [IndexNow Documentation](https://www.indexnow.org/documentation)
- [Bing IndexNow](https://www.bing.com/indexnow)

