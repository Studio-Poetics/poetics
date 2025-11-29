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

  const { base64Image, mimeType } = req.body;

  if (!base64Image || typeof base64Image !== 'string') {
    return res.status(400).json({ error: 'Invalid image data' });
  }

  if (!mimeType || typeof mimeType !== 'string') {
    return res.status(400).json({ error: 'Invalid mime type' });
  }

  const API_KEY = process.env.GEMINI_API_KEY;

  if (!API_KEY) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  const SYSTEM_INSTRUCTION = `
You are a Sonic Architect. Your task is to analyze architectural images (floor plans, interior photos, building sketches) and translate their visual properties into a complete musical composition profile.

Analyze the image for:
1. Volume/Space: Estimated physical volume. A small closet is 0.1, a cathedral is 1.0.
2. Brightness/Light: Amount of natural light. Dark/Cave is 0.1, Glasshouse is 1.0.
3. Complexity: Visual noise and structural detail. Minimalist is 0.1, Baroque is 1.0.
4. Materials: Dominant materials.
5. Detected Features: specific visual elements (e.g., "Spiral staircase", "Open kitchen", "Corinthian columns", "Drafting lines").
6. Musical Parameters:
   - Key: A musical key that fits the vibe (e.g., "C Minor", "F# Major", "E Dorian").
   - Tempo: BPM between 60 and 140.
   - Genre: A generic style descriptor (e.g., "Deep House", "Ambient Drone", "Classical Minimalist", "Industrial", "Jazz Noir").

Return strictly JSON.
`;

  try {
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
                  inline_data: {
                    data: base64Image,
                    mime_type: mimeType
                  }
                },
                {
                  text: 'Analyze this architecture for sonic translation.'
                }
              ]
            }
          ],
          systemInstruction: {
            parts: [
              {
                text: SYSTEM_INSTRUCTION
              }
            ]
          },
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 1024,
            responseMimeType: 'application/json',
            responseSchema: {
              type: 'object',
              properties: {
                volume: {
                  type: 'number',
                  description: '0.0 to 1.0 representing physical space size'
                },
                brightness: {
                  type: 'number',
                  description: '0.0 to 1.0 representing light and openness'
                },
                complexity: {
                  type: 'number',
                  description: '0.0 to 1.0 representing visual detail density'
                },
                materials: {
                  type: 'string',
                  description: 'Dominant materials visible'
                },
                mood: {
                  type: 'string',
                  description: 'Emotional atmosphere'
                },
                suggestedKey: {
                  type: 'string',
                  description: 'Musical key (e.g. C Minor)'
                },
                tempo: {
                  type: 'number',
                  description: 'BPM'
                },
                genre: {
                  type: 'string',
                  description: 'Musical genre style'
                },
                detectedFeatures: {
                  type: 'array',
                  items: { type: 'string' },
                  description: 'List of 3-5 specific visual elements found in the image'
                },
                architecturalDescription: {
                  type: 'string',
                  description: 'A poetic description of the space\'s acoustic qualities'
                }
              },
              required: [
                'volume',
                'brightness',
                'complexity',
                'materials',
                'mood',
                'suggestedKey',
                'tempo',
                'genre',
                'detectedFeatures',
                'architecturalDescription'
              ]
            }
          }
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Gemini API request failed: ${response.status}`);
    }

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      throw new Error('No response from Gemini');
    }

    // Parse the JSON response
    const sonicData = JSON.parse(text);

    return res.status(200).json(sonicData);
  } catch (error) {
    console.error('Error analyzing architecture:', error);
    return res.status(500).json({
      error: 'Analysis failed. Please try again.',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
