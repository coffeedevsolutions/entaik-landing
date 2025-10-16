# 🚀 Vercel + IndexNow - Super Simple Setup

## 1️⃣ One-Time Setup (2 minutes)

### Add Environment Variables to Vercel

Go to your Vercel project → **Settings** → **Environment Variables** and add:

```bash
INDEXNOW_KEY=e689dd92ff36a9f3aadac014fb84a175a3d83c1e11d31e286a587f8a4ec88204
CRON_SECRET=[generate-a-random-secret-here]
```

**To generate CRON_SECRET**, run in terminal:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Apply to: **Production, Preview, and Development**

### That's it! 🎉

## How It Works

### ✨ Automatic (Recommended)

**Vercel Cron Job** runs every 6 hours and automatically submits your key pages to search engines:
- Homepage
- Features page
- Workflows page  
- Pricing page
- Blog page

**No action needed!** Just deploy and it works.

### 🎯 Manual (When you publish new content)

When you publish a new blog post or update content:

```bash
curl -X POST https://www.uptaik.com/api/indexnow \
  -H "Content-Type: application/json" \
  -d '{"url": "https://www.uptaik.com/blog/your-new-post"}'
```

Or in your code:

```typescript
// After publishing
await fetch('/api/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    url: 'https://www.uptaik.com/blog/new-post' 
  }),
});
```

## 🧪 Test It

After deploying to Vercel:

```bash
# Check if key file is accessible
curl https://www.uptaik.com/e689dd92ff36a9f3aadac014fb84a175a3d83c1e11d31e286a587f8a4ec88204.txt

# Test IndexNow API
curl -X POST https://www.uptaik.com/api/indexnow \
  -H "Content-Type: application/json" \
  -d '{"url": "https://www.uptaik.com"}'
```

You should see: `{"success":true,"results":[...]}`

## 📊 Monitor

Check Vercel function logs:
1. Go to Vercel Dashboard
2. Click your project
3. Go to **Logs** tab
4. Filter for `/api/indexnow`

Look for:
```
⏰ Cron job triggered - submitting URLs to IndexNow...
✅ Cron job completed: 5/5 successful
```

## ⚡ When to Submit URLs

| Action | How |
|--------|-----|
| **New blog post** | Call `/api/indexnow` with the new URL |
| **Updated page** | Call `/api/indexnow` with the updated URL |
| **Deployment** | Automatic via cron (every 6 hours) |
| **Major changes** | Cron handles it automatically |

## 🎛️ Adjust Cron Frequency

Edit `vercel.json`:

```json
{
  "crons": [{
    "path": "/api/indexnow/cron",
    "schedule": "0 */6 * * *"  // Every 6 hours
  }]
}
```

Common schedules:
- `"0 */12 * * *"` - Every 12 hours
- `"0 0 * * *"` - Daily at midnight
- `"0 */3 * * *"` - Every 3 hours

## 🔥 Pro Tips

1. **New content**: Always submit immediately via API
2. **Cron job**: Catches everything else automatically
3. **Don't spam**: Let cron handle regular updates
4. **Monitor logs**: Check Vercel logs periodically

That's all! Your site now auto-submits to search engines. 🚀

