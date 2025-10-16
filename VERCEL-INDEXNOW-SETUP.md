# IndexNow Setup for Vercel

This guide shows you how to automatically submit your site to search engines after each Vercel deployment using IndexNow.

## 🚀 Quick Setup (3 Steps)

### Step 1: Verify Key File is Deployed

After your next deployment, verify the key file is accessible:
```
https://www.uptaik.com/e689dd92ff36a9f3aadac014fb84a175a3d83c1e11d31e286a587f8a4ec88204.txt
```

This file should contain: `e689dd92ff36a9f3aadac014fb84a175a3d83c1e11d31e286a587f8a4ec88204`

### Step 2: Add Environment Variable to Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add this variable:
   ```
   Name: INDEXNOW_KEY
   Value: e689dd92ff36a9f3aadac014fb84a175a3d83c1e11d31e286a587f8a4ec88204
   ```
4. Apply to: Production, Preview, and Development
5. Click **Save**

### Step 3: Set Up Automatic Submission (Choose One Method)

#### **Method A: Vercel Deploy Hooks (Recommended)**

This automatically submits URLs after each successful deployment.

1. Go to **Vercel Dashboard** → **Settings** → **Git**
2. Scroll to **Deploy Hooks**
3. Click **Create Hook**
4. Configure:
   - **Name**: IndexNow Auto-Submit
   - **Branch**: main (or your production branch)
5. Click **Create Hook** - Vercel will give you a webhook URL
6. **Important**: Now we need to call our API from this hook

**Set up the webhook caller:**
1. Go to **Settings** → **Environment Variables**
2. Add:
   ```
   Name: VERCEL_DEPLOY_HOOK_URL
   Value: [paste the deploy hook URL Vercel gave you]
   ```
3. Redeploy your site

#### **Method B: Manual Webhook (Alternative)**

If you prefer more control, use a service like Pipedream or Zapier:

1. Create a workflow that triggers on "Vercel Deployment Succeeded"
2. Make a POST request to: `https://www.uptaik.com/api/indexnow/deploy-hook`
3. Optional: Add authentication header with a secret

## 🎯 How It Works

After each deployment:
1. Vercel deploys your site
2. The deploy hook automatically triggers
3. Your API submits these URLs to IndexNow:
   - Homepage
   - Features hub page
   - All 4 feature subpages
   - Workflows page
   - Pricing, Blog, Contact, Request Demo

Search engines (Bing, Yandex, etc.) are instantly notified of the updates!

## 🧪 Testing

### Test the deploy hook manually:
```bash
curl -X POST https://www.uptaik.com/api/indexnow/deploy-hook
```

### Test IndexNow API directly:
```bash
# Single URL
curl -X POST https://www.uptaik.com/api/indexnow \
  -H "Content-Type: application/json" \
  -d '{"url": "https://www.uptaik.com/blog/test-post"}'

# Multiple URLs
curl -X POST https://www.uptaik.com/api/indexnow \
  -H "Content-Type: application/json" \
  -d '{"urls": ["https://www.uptaik.com/features", "https://www.uptaik.com/workflows"]}'
```

## 📝 Usage Examples

### Submit New Blog Post

When you publish a new blog post, automatically submit it:

```typescript
// In your blog publishing function
export async function publishPost(slug: string) {
  // ... save post to database
  
  // Notify search engines
  await fetch('/api/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      url: `https://www.uptaik.com/blog/${slug}` 
    }),
  });
}
```

### Client-Side Submission (React Hook)

```typescript
'use client';
import { useIndexNow } from '@/hooks/useIndexNow';

export function BlogEditor() {
  const { submitUrl, isSubmitting } = useIndexNow();
  
  const handlePublish = async (slug: string) => {
    // Publish the blog post...
    
    // Submit to IndexNow
    await submitUrl(`https://www.uptaik.com/blog/${slug}`);
  };
  
  return (
    <button onClick={() => handlePublish('my-post')} disabled={isSubmitting}>
      {isSubmitting ? 'Publishing...' : 'Publish'}
    </button>
  );
}
```

### Server Action

```typescript
'use server';
import { submitUrl } from '@/lib/indexnow';

export async function updateFeaturePage(featureId: string) {
  // Update your feature page...
  
  // Notify search engines
  await submitUrl(`https://www.uptaik.com/features/${featureId}`);
  
  return { success: true };
}
```

## 🔒 Security (Optional)

To secure your deploy hook endpoint:

1. Add to Vercel Environment Variables:
   ```
   Name: DEPLOY_HOOK_SECRET
   Value: [generate a random secret]
   ```

2. When calling the webhook, include:
   ```bash
   curl -X POST https://www.uptaik.com/api/indexnow/deploy-hook \
     -H "Authorization: Bearer YOUR_SECRET"
   ```

## 📊 Monitoring

Check Vercel function logs to see IndexNow submissions:
1. Go to **Vercel Dashboard** → **Deployments**
2. Click on a deployment
3. Go to **Functions** tab
4. Look for logs from `/api/indexnow/deploy-hook`

You should see:
```
📡 Deploy hook triggered - submitting key pages to IndexNow...
✅ IndexNow deployment hook: 11/11 submissions successful
```

## 🎛️ Advanced: Submit Entire Sitemap

For major site-wide changes (use sparingly):

```bash
# Install tsx
npm install -D tsx

# Run the script
npx tsx scripts/submit-sitemap-indexnow.ts
```

This submits ALL URLs from your sitemap to IndexNow.

## ⚡ Best Practices

1. **✅ DO**: Submit URLs when content actually changes
2. **✅ DO**: Batch multiple URLs together
3. **✅ DO**: Submit new blog posts immediately
4. **❌ DON'T**: Submit the same URL repeatedly without changes
5. **❌ DON'T**: Submit entire sitemap on every deployment
6. **❌ DON'T**: Spam - respect rate limits

## 🐛 Troubleshooting

### Key file not accessible (403)
- Check that the file is in `/public/` directory
- Verify file name matches exactly
- Redeploy to Vercel

### Environment variable not found
- Make sure `INDEXNOW_KEY` is set in Vercel
- Redeploy after adding environment variables

### No submissions happening
- Check Vercel function logs
- Verify deploy hook is configured
- Test the endpoint manually with curl

### Rate limiting (429)
- You're submitting too frequently
- Wait a few minutes before retrying
- Consider batching URLs

## 📚 Resources

- [IndexNow Documentation](https://www.indexnow.org/documentation)
- [Vercel Deploy Hooks](https://vercel.com/docs/concepts/git/deploy-hooks)
- [Bing IndexNow](https://www.bing.com/indexnow)

## 🎉 You're All Set!

Once configured, your site will automatically notify search engines after each deployment. No manual intervention needed!

**Next Steps:**
1. Complete the 3-step setup above
2. Deploy to Vercel
3. Watch the function logs to verify submissions
4. Enjoy faster indexing! 🚀

