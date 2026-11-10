import fs from 'node:fs';
import path from 'node:path';
const dir='ios/App/App/Assets.xcassets/AppIcon.appiconset';
if (!fs.existsSync(dir)) { console.log('App icon folder not yet generated'); process.exit(0); }
fs.copyFileSync('assets/noor-icon.png',path.join(dir,'AppIcon-512@2x.png'));
fs.writeFileSync(path.join(dir,'Contents.json'),JSON.stringify({images:[{filename:'AppIcon-512@2x.png',idiom:'universal',platform:'ios',size:'1024x1024'}],info:{author:'xcode',version:1}},null,2));
console.log('Noor icon configured');
