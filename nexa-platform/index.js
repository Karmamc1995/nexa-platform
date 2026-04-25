const axios = require("axios");

console.log("Nexa Platform запущена");

async function test() {
  try {
    const res = await axios.get("https://api.github.com");
    console.log("API OK:", res.status);
  } catch (e) {
    console.error("Ошибка:", e.message);
  }
}

test();