#!/bin/bash

echo "🚀 Creating NEXA platform structure..."

mkdir -p nexa-platform
cd nexa-platform

# CORE
mkdir -p core vk ai memory profiles modules games services config scripts

# ROOT FILES
touch index.js
touch package.json
touch .env.example

# CORE FILES
touch core/bootstrap.js
touch core/system.js

# VK LAYER
touch vk/vkClient.js
touch vk/handlers.js

# AI LAYER
touch ai/router.js
touch ai/gpt.js
touch ai/gemini.js
touch ai/prompt.js

# MEMORY
touch memory/memoryStore.js

# PROFILES
touch profiles/profileStore.js

# MODULES
touch modules/commands.js
touch modules/admin.js
touch modules/games.js

# GAMES
touc -platform








games/guessNumber.js
touch games/rps.js

# SERVICES

touch services/logger.js
touch services/aiService.js

# CONFIG
touch config/config.js

echo "📦 Installing dependencies..."
npm init -y
npm install vk-io dotenv

echo "✅ NEXA structure created succe
