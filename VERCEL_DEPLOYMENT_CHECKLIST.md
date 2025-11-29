# ✅ Vercel Deployment Checklist

## 🚀 Current Status

Your code is **pushed to GitHub** and **ready to deploy**!

---

## 📋 Manual Steps Required

### **Step 1: Add API Key to Vercel** ⚠️ CRITICAL

1. **Go to**: https://vercel.com/dashboard
2. **Select**: Your `poetics.studio` project
3. **Click**: Settings → Environment Variables
4. **Add New Variable**:
   ```
   Name: GEMINI_API_KEY
   Value: AIzaSyAW13AVeblbuJXy3A10Nf41wxS8Y2m6CdE
   ```
5. **Select Environments**:
   - ☑️ Production (mark as "Sensitive")
   - ☑️ Preview (can't mark sensitive - that's okay)
   - ☑️ Development (can't mark sensitive - that's okay)
6. **Note**: Only Production allows "Sensitive" toggle. This is normal! Add to all three environments so preview deployments work.
7. **Click**: Save

### **Step 2: Trigger Redeploy**

1. **Go to**: Deployments tab
2. **Find**: Latest deployment
3. **Click**: Three dots (...) → Redeploy
4. **Wait**: 2-3 minutes for build to complete

---

## ✅ Testing Checklist

After redeployment, test these features:

### **1. Homepage - Iconoclast**
- [ ] Visit: `https://poetics.studio`
- [ ] Scroll to "Laboratory" section
- [ ] Click **Prototype 001** tab
- [ ] Enter: "chair"
- [ ] Click submit
- [ ] **Expected**: AI response about design history
- [ ] **If fails**: Check Vercel function logs

### **2. Experiments Page - Iconoclast**
- [ ] Visit: `https://poetics.studio` (navigate to Experiments)
- [ ] Test same as above
- [ ] **Expected**: Same AI functionality works

### **3. Sonic Architecture**
- [ ] Visit: `https://poetics.studio/experiments/sonic-arch`
- [ ] Click upload area
- [ ] Upload a floorplan image (JPG/PNG)
- [ ] **Expected**: "ANALYZING GEOMETRY & LIGHT..." appears
- [ ] **Expected**: After 3-5 seconds, analysis data appears
- [ ] Click **"Generate Soundscape"**
- [ ] **Expected**: Music plays based on the architecture
- [ ] **If fails**: Check browser console for errors

### **4. SEO Protection**
- [ ] Visit: `https://your-project-name.vercel.app`
- [ ] **Expected**: Auto-redirects to `https://poetics.studio`
- [ ] Check network tab in browser devtools
- [ ] **Expected**: See 301 redirect status

### **5. Check No-Index Headers**
```bash
# Run this command:
curl -I https://your-project-name.vercel.app | grep X-Robots-Tag

# Expected output:
X-Robots-Tag: noindex, nofollow
```

---

## 🔧 Troubleshooting

### **API Features Don't Work**

**Symptoms:**
- Iconoclast shows error message
- Sonic Architecture shows "Analysis failed"
- Console shows 500 errors

**Fix:**
1. Check environment variable is set correctly
2. Redeploy after adding the key
3. Check Vercel function logs:
   - Dashboard → Project → Deployments → Click deployment → View Function Logs
4. Look for "API key not configured" errors

### **Redirect Not Working**

**Symptoms:**
- Can still access `*.vercel.app` URL
- Not redirecting to `poetics.studio`

**Fix:**
1. Wait 5-10 minutes after deployment
2. Clear browser cache
3. Try incognito mode
4. Check `vercel.json` is in the repo root
5. Check Vercel build logs for errors

### **Build Fails**

**Symptoms:**
- Deployment shows "Failed" status
- Error messages in build logs

**Fix:**
1. Check build logs in Vercel dashboard
2. Common issues:
   - Missing dependencies → run `npm install` locally first
   - TypeScript errors → fix in your code
   - Environment variable issues → double-check spelling

### **Sonic Architecture Blank/White Screen**

**Symptoms:**
- `/experiments/sonic-arch` shows empty page
- Console shows module errors

**Fix:**
1. Check if `public/experiments/sonic-arch/` folder exists in repo
2. Check if `assets/index-DkVe3bKK.js` file exists
3. Rebuild locally and push again

---

## 📊 Vercel Dashboard Quick Reference

### **Where to Find Things:**

| Task | Location |
|------|----------|
| Add environment variables | Settings → Environment Variables |
| View deployments | Deployments tab |
| Check function logs | Deployments → Click deployment → View Function Logs |
| Trigger redeploy | Deployments → [...] → Redeploy |
| Domain settings | Settings → Domains |
| View build logs | Deployments → Click deployment → Build Logs |

---

## 🎯 Success Indicators

You'll know everything is working when:

✅ **Latest deployment** shows "Ready" status
✅ **Iconoclast** generates design history responses
✅ **Sonic Architecture** analyzes images and plays music
✅ **Vercel URLs** redirect to `poetics.studio`
✅ **No console errors** when using features
✅ **Function logs** show successful API calls

---

## 📈 Monitor Your Site

### **Vercel Analytics (Free)**

Enable analytics to track:
- Page views
- Performance metrics
- Function invocations
- Error rates

**To enable:**
1. Dashboard → Your Project → Analytics
2. Click "Enable Analytics"
3. Free tier includes basic metrics

### **Check API Usage**

Monitor your Gemini API usage:
1. Visit: https://aistudio.google.com/app/apikey
2. Click on your API key
3. View usage metrics
4. Set up alerts for quota limits

---

## 🔄 Future Updates

Every time you push to GitHub:

1. **Automatic**:
   - Vercel detects the push
   - Builds the site
   - Deploys to production
   - Usually takes 2-5 minutes

2. **No manual steps** needed (unless adding new env vars)

3. **Check deployment**:
   - Visit Vercel dashboard
   - Look for green "Ready" checkmark
   - Test the changes on your live site

---

## 🚨 Important Notes

### **Environment Variables**

- ✅ **Production**: Used for `poetics.studio`
- ✅ **Preview**: Used for PR preview deployments
- ✅ **Development**: Used for `vercel dev` command

Add to **all three** to ensure consistency.

### **Custom Domain**

Make sure `poetics.studio` is:
- ✅ Added in Settings → Domains
- ✅ DNS configured properly
- ✅ Shows as "Active" in Vercel

### **Function Logs**

To debug API issues:
1. Go to specific deployment
2. Click "View Function Logs"
3. Look for `/api/generate` and `/api/analyze-architecture` calls
4. Check for error messages

---

## 📞 Need Help?

If something doesn't work:

1. **Check build logs** first (most common issues shown here)
2. **Check function logs** for API errors
3. **Test locally** with `npm run dev`
4. **Compare** local vs production behavior
5. **Check** this checklist again

---

## ✅ Final Verification

After completing all steps, verify:

- [ ] Environment variable `GEMINI_API_KEY` is set
- [ ] Latest deployment shows "Ready"
- [ ] Iconoclast works on homepage
- [ ] Iconoclast works on experiments page
- [ ] Sonic Architecture works at `/experiments/sonic-arch`
- [ ] Vercel URLs redirect to custom domain
- [ ] No console errors on any page
- [ ] Function logs show successful API calls

**All checked?** You're done! 🎉

---

## 📚 Additional Resources

- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Vercel Deployments](https://vercel.com/docs/deployments/overview)
- [Vercel Functions](https://vercel.com/docs/functions)
- [Troubleshooting Vercel](https://vercel.com/docs/troubleshooting)
