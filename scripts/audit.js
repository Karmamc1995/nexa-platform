const fs = require('fs');
const path = require('path');

const requiredStructure = {
  root: [
    'index.js',
    'package.json',
    '.env'
  ],
  core: [
    'bootstrap.js',
    'system.js'
  ],
  vk: [
    'vkClient.js',
    'handlers.js'
  ],
  ai: [
    'router.js',
    'gpt.js',
    'gemini.js',
    'prompt.js'
  ],
  memory: [
    'memoryStore.js'
  ],
  profiles: [
    'profileStore.js'
  ],
  modules: [
    'commands.js',
    'admin.js',
    'games.js'
  ],
  games: [
    'guessNumber.js',
    'rps.js'
  ],
  services: [
    'logger.js',
    'aiService.js'
  ],
  config: [
    'config.js'
  ],
  scripts: [
    'setup.sh'
  ]
};

function checkFile(filePath) {
  return fs.existsSync(filePath);
}

function audit() {
  console.log('\n🧬 NEXA SYSTEM AUDIT\n');

  // root
  requiredStructure.root.forEach(file => {
    const exists = checkFile(file);
    console.log(`${exists ? '✅' : '❌'} ${file}`);
  });

  console.log('\n📂 MODULES:\n');

  Object.keys(requiredStructure).forEach(dir => {
    if (dir === 'root') return;

    console.log(`\n[${dir}]`);

    requiredStructure[dir].forEach(file => {
      const filePath = path.join(dir, file);
      const exists = checkFile(filePath);

      console.log(`${exists ? '✅' : '❌'} ${filePath}`);
    });
  });

  console.log('\n✔ AUDIT COMPLETE\n');
}

audit();
