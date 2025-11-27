# ⚡ Quick Start - API Configuration

## 1. Get API Key
Visit: https://aistudio.google.com/app/apikey

## 2. Local Setup
```bash
# Create .env.local file
echo "GEMINI_API_KEY=your_key_here" > .env.local

# Start dev server
npm run dev
```

## 3. Production Setup (Vercel)
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add: `GEMINI_API_KEY` = `your_key`
3. Select all environments (Production, Preview, Development)
4. Redeploy

## Done! 🎉

See `API_SETUP.md` for detailed documentation.
