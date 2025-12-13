import { GoogleGenAI } from "@google/genai";

const getApiKey = () => {
  // Support for legacy Cloud Run injection if present, otherwise standard env
  const runtimeKey = (window as any).env?.API_KEY;
  if (runtimeKey && runtimeKey !== '__VITE_API_KEY__') {
    return runtimeKey;
  }
  return process.env.API_KEY;
};

export const askTaxAi = async (question: string): Promise<string> => {
  const apiKey = getApiKey();
  
  // If no API key is set, return a friendly offline message instead of crashing
  if (!apiKey) {
    console.warn("Cheapa Chicken: No API Key found. AI Service is disabled.");
    return "Wayne is currently offline (No API Key configured). Please check back later.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are Wayne Blair, an AI tax assistant for small Jamaican chicken farmers. 
      Answer the following question about business, tax, or farming profits: "${question}".
      Keep the answer concise, helpful, and relevant to the Jamaican context.`,
    });
    return response.text || "I couldn't process your request.";
  } catch (error) {
     console.error("Error asking Tax AI:", error);
     return "Wayne is currently out of office (Offline Mode). Remember: The golden rule of farming business is to keep your receipts organized and track every single bag of feed. This simple habit maximizes your deductions!";
  }
};