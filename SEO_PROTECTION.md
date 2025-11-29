# 🔍 SEO Protection & Vercel Configuration

## Problem: Duplicate Content Risk

When you deploy to Vercel, you get **two URLs** serving the same content:
- ✅ **Your custom domain**: `poetics.studio`
- ⚠️ **Vercel's URL**: `poetics-studio.vercel.app`

This creates **duplicate content** that can hurt your SEO rankings.

---

## ✅ Solution: Automatic Redirects + No-Index Headers

We've configured `vercel.json` to:

1. **Redirect all Vercel URLs** to your custom domain (301 permanent redirect)
2. **Block search engines** from indexing Vercel URLs
3. **Preserve SEO value** on `poetics.studio` only

---

## 📝 How It Works

### **1. Automatic Redirects**

```json
{
  "redirects": [
    {
      "source": "/:path*",
      "has": [
        {
          "type": "host",
          "value": "(.+)\\.vercel\\.app"
        }
      ],
      "destination": "https://poetics.studio/:path*",
      "permanent": true
    }
  ]
}
```

**What this does:**
- Any visitor to `poetics-studio.vercel.app` → **automatically redirected** to `poetics.studio`
- Uses **301 permanent redirect** → tells Google this is the canonical URL
- Works for **all paths**: `/about`, `/experiments`, etc.

**Example:**
```
poetics-studio.vercel.app/experiments
          ↓ (301 redirect)
poetics.studio/experiments  ← SEO value goes here
```

### **2. No-Index Headers**

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Robots-Tag",
          "value": "noindex, nofollow"
        }
      ],
      "has": [
        {
          "type": "host",
          "value": "(?!poetics\\.studio$).*"
        }
      ]
    }
  ]
}
```

**What this does:**
- Adds `X-Robots-Tag: noindex, nofollow` header to **all non-custom domains**
- Tells search engines: "Don't index this version"
- Only affects Vercel URLs, **not** your custom domain

---

## 🧪 Testing

### **Test Redirects:**

1. Visit: `https://your-project.vercel.app`
2. Should **automatically redirect** to `https://poetics.studio`
3. Check browser network tab → should see **301 redirect**

### **Test No-Index Headers:**

```bash
# Check Vercel URL (should have no-index)
curl -I https://your-project.vercel.app

# Should show:
# X-Robots-Tag: noindex, nofollow

# Check Custom Domain (should NOT have no-index)
curl -I https://poetics.studio

# Should NOT have X-Robots-Tag header
```

---

## ✅ Vercel Free Plan Limits

Your setup is **well within free tier limits**:

| Resource | Free Plan Limit | Your Usage | Status |
|----------|----------------|------------|---------|
| Serverless Functions | ✅ Included | 2 functions | ✅ Safe |
| Function Invocations | 100GB-hours/month | ~5-10GB expected | ✅ Safe |
| Function Duration | 10 sec max | ~2-3 sec average | ✅ Safe |
| Bandwidth | 100GB/month | ~10-20GB expected | ✅ Safe |
| Environment Variables | Unlimited | 1 variable | ✅ Safe |
| Build Minutes | 6,000 min/month | ~2-5 min/deploy | ✅ Safe |

**Bottom line:** You won't hit any limits on the free plan! 🎉

---

## 🚨 Important Notes

### **1. Custom Domain Setup**

Make sure your custom domain is properly configured in Vercel:

1. Go to: Vercel Dashboard → Your Project → Settings → Domains
2. Ensure `poetics.studio` is added and verified
3. Ensure DNS records point to Vercel

### **2. Canonical URLs**

Your site already uses canonical URLs in the HTML:
```html
<link rel="canonical" href="https://poetics.studio/" />
```

This reinforces to Google which URL is the "official" version.

### **3. Sitemap**

If you have a sitemap, ensure it uses:
- ✅ `https://poetics.studio/page1`
- ❌ NOT `https://your-project.vercel.app/page1`

---

## 📊 SEO Impact

### **Before Configuration:**
```
Google sees:
- poetics.studio/about
- poetics-studio.vercel.app/about
→ Duplicate content penalty
→ Split SEO value between URLs
```

### **After Configuration:**
```
Google sees:
- poetics.studio/about (indexed)
- poetics-studio.vercel.app → redirects to poetics.studio
→ All SEO value consolidated
→ Clean, canonical URLs
```

---

## 🔧 Troubleshooting

### **Redirect Not Working?**

1. **Check domain configuration** in Vercel dashboard
2. **Wait 5-10 minutes** after deploying for changes to propagate
3. **Clear browser cache** or test in incognito
4. **Check Vercel logs** for any errors

### **Still Seeing Vercel URL in Google?**

1. **Submit removal request** in Google Search Console
2. **Request re-indexing** of your custom domain
3. **Wait 2-4 weeks** for Google to update

### **Want to Block Specific Vercel Subdomains?**

Edit `vercel.json` redirects to target specific patterns:
```json
{
  "has": [
    {
      "type": "host",
      "value": "your-specific-project\\.vercel\\.app"
    }
  ]
}
```

---

## 📚 Additional SEO Best Practices

1. **robots.txt**: Ensure your `robots.txt` only allows your custom domain
2. **Google Search Console**: Submit your sitemap for `poetics.studio`
3. **Meta tags**: Keep using canonical URLs in all pages
4. **Internal links**: Always link to `poetics.studio`, not Vercel URLs
5. **Social sharing**: Use Open Graph tags with your custom domain

---

## ✅ Summary

- ✅ **Automatic redirects** from all Vercel URLs to `poetics.studio`
- ✅ **No-index headers** prevent Vercel URLs from being indexed
- ✅ **Free plan compatible** - well within all limits
- ✅ **SEO-safe** - no duplicate content issues
- ✅ **Canonical URLs** properly configured

**You're all set!** Your SEO is protected and your site will work perfectly on Vercel's free plan.

---

## 🔗 Resources

- [Vercel Redirects Documentation](https://vercel.com/docs/edge-network/redirects)
- [Vercel Headers Documentation](https://vercel.com/docs/edge-network/headers)
- [Vercel Pricing (Free Plan)](https://vercel.com/pricing)
- [Google Duplicate Content Guide](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
