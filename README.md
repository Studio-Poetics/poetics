<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# poetics.studio

A creative platform featuring AI-powered design history exploration and interactive experiences.

View your app in AI Studio: https://ai.studio/apps/drive/17RkPQtUFiDqktzGNi2VrzfpgklzIiF7c

## Architecture

This app uses a secure serverless API architecture:
- **Frontend**: React + Vite application
- **Backend**: Vercel serverless function (`/api/generate.ts`) handles Gemini API calls
- **Security**: API key is stored securely in environment variables and never exposed to the client

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env.local` file (copy from `.env.example`):
   ```bash
   cp .env.example .env.local
   ```

3. Get your Gemini API key from https://aistudio.google.com/app/apikey and add it to `.env.local`:
   ```
   GEMINI_API_KEY=your_actual_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

## Deploy to Vercel

1. Push your code to GitHub (the `.env.local` file will be ignored)

2. Import your repository on [Vercel](https://vercel.com)

3. Add environment variable in Vercel project settings:
   - Go to Project Settings → Environment Variables
   - Add `GEMINI_API_KEY` with your API key value
   - This will be used by the serverless function at runtime

4. Deploy! Your API key is now secure and never exposed to the client

## Important Security Notes

- ✅ API key is only used in the serverless function (`/api/generate.ts`)
- ✅ The prompt and API logic are server-side, not exposed to users
- ✅ `.env.local` is gitignored and never committed to GitHub
- ✅ On Vercel, set the API key in project environment variables
