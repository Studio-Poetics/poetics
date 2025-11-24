import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { input } = req.body;

  if (!input || typeof input !== 'string') {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const API_KEY = process.env.GEMINI_API_KEY;

  if (!API_KEY) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const prompt = `
      You are a strict design historian.
      The user provides an everyday object or concept: "${input}".

      Task: Identify a REAL, VERIFIED avant-garde design object or artwork from history that challenged the archetype of this concept.

      CRITICAL RULES:
      1. Do NOT hallucinate. Do NOT invent artworks, products, or dates. Verify the existence of the object before answering.
      2. If you cannot find a specific, famous example (e.g. from movements like Droog, Memphis, Bauhaus, Dada, etc.), strictly reply with: "archive data unavailable. please try another object."
      3. If a valid example exists, explain strictly HOW it challenged the norm.

      Format: Minimalist, sophisticated, lower-case aesthetic. Max 3 sentences.
    `;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 200,
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'silence returned.';

    return res.status(200).json({ text: text.trim() });
  } catch (error) {
    console.error('Error generating poetics:', error);
    return res.status(500).json({ error: 'static noise. connection interrupted.' });
  }
}
