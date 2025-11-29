# 🔐 Gemini API Security Setup Guide

This guide explains how to securely configure the Google Gemini API for the Poetics Studio website.

## Architecture Overview

```
┌─────────────────┐
│   Components    │
│  (Client-Side)  │
│                 │
│ • Iconoclast    │
│ • Sonic Arch    │
└────────┬────────┘
         │
         │ POST /api/generate
         │
         ▼
┌─────────────────┐
│  Vercel Edge    │
│  Function       │
│  (Server-Side)  │
│                 │
│  api/generate.ts│
└────────┬────────┘
         │
         │ Uses GEMINI_API_KEY
         │ (From Environment)
         ▼
┌─────────────────┐
│  Google Gemini  │
│      API        │
└─────────────────┘
```

## ✅ What's Already Configured

1. **API Routes**:
   - `/api/generate` - Text generation for Iconoclast (design history analysis)
   - `/api/analyze-architecture` - Image analysis for Sonic Architecture (floorplan to music)
2. **Security Features**:
   - CORS headers configured
   - POST-only requests
   - Input validation
   - Error handling
   - Rate limiting (via Vercel)

3. **Components Using API**:
   - ✅ PoeticMachine (Iconoclast) - `/components/PoeticMachine.tsx` → `/api/generate`
   - ✅ Sonic Architecture - `/sonic-architecture/services/geminiService.ts` → `/api/analyze-architecture`

## 🚀 Setup Instructions

### 1. Local Development Setup

1. **Get Your Gemini API Key**:
   - Visit: https://aistudio.google.com/app/apikey
   - Create a new API key
   - Copy the key

2. **Create Local Environment File**:
   ```bash
   # In the project root, create .env.local
   touch .env.local
   ```

3. **Add Your API Key**:
   ```env
   # .env.local
   GEMINI_API_KEY=your_actual_api_key_here
   ```

4. **Restart Dev Server**:
   ```bash
   npm run dev
   ```

### 2. Vercel Production Setup

1. **Login to Vercel Dashboard**:
   - Go to: https://vercel.com/dashboard
   - Select your project

2. **Add Environment Variable**:
   - Navigate to: **Settings** → **Environment Variables**
   - Click **Add New**
   - Enter:
     - **Name**: `GEMINI_API_KEY`
     - **Value**: `your_actual_api_key`
     - **Environments**: Select **Production**, **Preview**, and **Development**

3. **Redeploy**:
   - Vercel will automatically redeploy
   - Or manually trigger: **Deployments** → **Redeploy**

## 🔒 Security Best Practices

### ✅ DO's

1. **Never commit `.env.local`** - Already in `.gitignore`
2. **Use Vercel Environment Variables** for production
3. **Keep API keys server-side only**
4. **Monitor API usage** in Google Cloud Console
5. **Set usage quotas** in Google Cloud to prevent abuse

### ❌ DON'Ts

1. **Never hardcode API keys** in component files
2. **Never commit keys** to Git
3. **Never expose keys** in client-side code
4. **Never share** `.env.local` files

## 📝 API Endpoint Usage

### Endpoint 1: `/api/generate` (Iconoclast - Text Generation)

**Request Format:**

```typescript
const response = await fetch('/api/generate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    input: 'chair' // User's input
  }),
});

const data = await response.json();
console.log(data.text); // AI response
```

**Response Format:**

Success:
```json
{
  "text": "the eames lounge chair (1956) challenged notions of comfort..."
}
```

Error:
```json
{
  "error": "Invalid input"
}
```

### Endpoint 2: `/api/analyze-architecture` (Sonic Architecture - Image Analysis)

**Request Format:**

```typescript
const response = await fetch('/api/analyze-architecture', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    base64Image: 'base64_encoded_image_data_without_prefix',
    mimeType: 'image/jpeg' // or 'image/png', etc.
  }),
});

const data = await response.json();
console.log(data); // Sonic analysis data
```

**Response Format:**

Success:
```json
{
  "volume": 0.7,
  "brightness": 0.8,
  "complexity": 0.5,
  "materials": "Glass, Steel",
  "mood": "Modern, Minimalist",
  "suggestedKey": "C Major",
  "tempo": 120,
  "genre": "Ambient",
  "detectedFeatures": ["Open floor plan", "Large windows", "Minimal furniture"],
  "architecturalDescription": "A bright, airy space with flowing acoustics..."
}
```

Error:
```json
{
  "error": "Invalid image data",
  "details": "Error message here"
}
```

## 🔧 Testing API Configuration

### Test Locally

```bash
# 1. Make sure .env.local has your key
cat .env.local

# 2. Start dev server
npm run dev

# 3. Test the Iconoclast on the Experiments page
# Enter an object like "chair" and click submit
```

### Test API Endpoint Directly

```bash
curl -X POST http://localhost:5173/api/generate \
  -H "Content-Type: application/json" \
  -d '{"input":"chair"}'
```

## 📊 Monitoring & Limits

### Check API Usage

1. Go to: https://console.cloud.google.com/
2. Select your project
3. Navigate to: **APIs & Services** → **Dashboard**
4. View Gemini API usage

### Set Quotas (Recommended)

1. Go to: **IAM & Admin** → **Quotas**
2. Filter for "Gemini API"
3. Set daily/monthly limits to prevent abuse

## 🚨 Troubleshooting

### "API key not configured" Error

**Cause**: `GEMINI_API_KEY` not set in environment

**Fix**:
- **Local**: Check `.env.local` exists and has the key
- **Production**: Add the key in Vercel dashboard

### "Method not allowed" Error

**Cause**: Using GET instead of POST

**Fix**: Ensure you're making POST requests to `/api/generate`

### CORS Errors

**Cause**: Cross-origin request blocked

**Fix**: API already has CORS headers configured. If issue persists:
- Check Vercel deployment logs
- Ensure you're calling from the same domain

### Rate Limiting

**Cause**: Too many requests

**Fix**:
- Implement client-side debouncing
- Add rate limiting in API route (see below)

## 🛡️ Advanced: Add Rate Limiting

To add rate limiting to the API route:

```typescript
// api/generate.ts
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

export default async function handler(req, res) {
  await limiter(req, res);
  // ... rest of handler
}
```

## 📚 Additional Resources

- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Google Gemini API Docs](https://ai.google.dev/docs)
- [Vercel Serverless Functions](https://vercel.com/docs/concepts/functions/serverless-functions)

## 🎯 Next Steps

- [ ] Get Gemini API key from Google AI Studio
- [ ] Create `.env.local` with your key
- [ ] Test locally with Iconoclast
- [ ] Add key to Vercel dashboard
- [ ] Deploy and test in production
- [ ] Update Sonic Architecture to use API route
- [ ] Set API usage quotas in Google Cloud
