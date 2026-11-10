import { existsSync, statSync } from 'node:fs';
const path = 'www/index.html';
if (!existsSync(path) || statSync(path).size < 1000) {
  console.error('Missing Noor web app: ' + path); process.exit(1);
}
console.log('Noor iOS web assets ready: ' + path);
