const axios = require('axios');
const { systemPrompt } = require('./prompt');

const OPENAI_KEY = process.env.OPENAI_KEY;

async function askGPT(text) {
  try {
    const res = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: text }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    return res.data.choices[0].message.content;
  } catch (e) {
    console.error("GPT error:", e.message);
    return null;
  }
}

module.exports = { askGPT };