import { SonicData } from "../types";

/**
 * Analyzes architectural images using the secure Vercel API route
 * This keeps the Gemini API key server-side and secure
 */
export const analyzeImage = async (base64Image: string, mimeType: string): Promise<SonicData> => {
  try {
    // Determine the API endpoint based on environment
    // In production: uses relative path which resolves to poetics.studio/api/analyze-architecture
    // In development: can use localhost or production URL
    const apiEndpoint = '/api/analyze-architecture';

    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        base64Image,
        mimeType
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `API request failed: ${response.status}`);
    }

    const data = await response.json();
    return data as SonicData;

  } catch (error) {
    console.error("Gemini Analysis Failed:", error);
    throw new Error(
      error instanceof Error
        ? error.message
        : "Failed to analyze architecture. Please try again."
    );
  }
};