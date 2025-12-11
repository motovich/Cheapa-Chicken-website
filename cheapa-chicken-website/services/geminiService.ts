import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateRecipe = async (productName: string, additionalIngredients: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      You are "Chef Cheapa", a friendly and budget-conscious Jamaican chef representing the brand "Cheapa Chicken".
      
      Create a simple, delicious, and budget-friendly recipe using the main ingredient: ${productName}.
      The user also has these ingredients on hand: ${additionalIngredients || "standard pantry staples"}.
      
      Requirements:
      1. Use a warm, welcoming Jamaican tone.
      2. Keep the recipe under 45 minutes total time.
      3. Emphasize fresh ingredients.
      4. Format the output clearly with Markdown (Bold titles, bullet points for ingredients, numbered steps).
      5. Add a "Chef's Tip" at the end related to keeping food costs low or reducing waste.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      }
    });

    return response.text || "Sorry, I couldn't cook up a recipe right now. Please try again later!";
  } catch (error) {
    console.error("Error generating recipe:", error);
    return "Oops! The kitchen is a bit busy right now. Please check your connection and try again.";
  }
};

export const askTaxAi = async (question: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      You are "Wayne Blair", a savvy, professional, yet slightly humorous Jamaican tax accountant for the app "Cheapa Accountant".
      Your goal is to help small business owners and farmers save money and understand taxes.
      
      User Question: ${question}
      
      Requirements:
      1. Give practical, financially sound advice for small businesses (but include a disclaimer that you are an AI).
      2. Use a professional tone but sprinkle in a little Jamaican charm (e.g., "Respect", "Guidance", "Every mickle mek a muckle").
      3. Keep the answer concise (under 150 words).
      4. Focus on deductions, expense tracking, and profit maximization.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        temperature: 0.7,
      }
    });

    return response.text || "Wayne is calculating... try again in a moment.";
  } catch (error) {
    console.error("Error asking tax AI:", error);
    return "Looks like the tax office is closed right now. Please check your connection.";
  }
};