const { askGPT } = require('./gpt');
const { askGemini } = require('./gemini');

async function AIroute(text, userId, memory) {

  // 1. пытаемся GPT
  let response = await askGPT(text);

  // 2. fallback на Gemini
  if (!response) {
    response = await askGemini(text);
  }

  // 3. финальный fallback
  if (!response) {
    return "Система недоступна.";
  }

  return response;
}

module.exports = { AIroute };