import { GoogleGenAI } from '@google/genai';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, SKILLS, PUBLICATIONS } from '../constants';

export class GeminiService {
  async chatWithAI(userMessage: string, history: { role: 'user' | 'assistant'; content: string }[]) {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      console.error('API Key missing');
      return 'ERROR: API Key configuration missing. Please set VITE_GEMINI_API_KEY in your .env file.';
    }

    const ai = new GoogleGenAI({ apiKey });

    try {
      const systemInstruction = `
You are the AI Career Assistant of ${PERSONAL_INFO.name}, a ${PERSONAL_INFO.title} at ${PERSONAL_INFO.company}.

CONTEXT:
- Name: ${PERSONAL_INFO.name}
- Title: ${PERSONAL_INFO.title}
- Company: ${PERSONAL_INFO.company}
- Location: ${PERSONAL_INFO.location}
- Bio: ${PERSONAL_INFO.bio}
- Experience: ${JSON.stringify(EXPERIENCES)}
- Projects: ${JSON.stringify(PROJECTS)}
- Skills: ${JSON.stringify(SKILLS)}
- Publications: ${JSON.stringify(PUBLICATIONS)}

TONE:
- Professional, knowledgeable, and concise.
- Speak in third person about Cheng-hung, or first person if asked directly.
- Support both English and Chinese (Traditional) queries.

INSTRUCTIONS:
- Answer questions about Cheng-hung's career, skills, projects, education, and publications.
- If asked about technical details, explain them in context of his firmware/protocol stack experience.
- For collaboration inquiries, direct them to ${PERSONAL_INFO.email} or ${PERSONAL_INFO.linkedin}.
- If you don't know something not covered in the context, say so politely.
`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: [
          ...history.map((h) => ({
            role: h.role === 'user' ? 'user' as const : 'model' as const,
            parts: [{ text: h.content }],
          })),
          { role: 'user' as const, parts: [{ text: userMessage }] },
        ],
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      return response.text || "I'm having trouble processing that. Could you rephrase your question?";
    } catch (error) {
      console.error('Gemini Error:', error);
      return 'The AI assistant is currently unavailable. Please try again shortly.';
    }
  }
}

export const geminiService = new GeminiService();
