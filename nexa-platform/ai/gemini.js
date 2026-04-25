const axios = require('axios');
const { systemPrompt } = require('./prompt');

const GEMINI_KEY = process.env.GEMINI_KEY;

async function askGemini(text) {
  try {
    const res = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`,
      {
        contents: [
          {
            parts: [
              { text: systemPrompt + "\n\nUser: " + text }
            ]
          }
        ]
      }
    );

    return res.data.candidates[0].content.parts[0].text;
  } catch (e) {
    console.error("Gemini error:", e.message);
    return null;
  }
}

module.exports = { askGemini };