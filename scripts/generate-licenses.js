const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Generating THIRD_PARTY_NOTICES.txt from pnpm dependencies...');

const raw = execSync('pnpm licenses list --json').toString();
const data = JSON.parse(raw);

let output = '==============================================================================\n';
output += 'SYNCROMANCER THIRD-PARTY NOTICES & OPEN-SOURCE LICENSES\n';
output += '==============================================================================\n\n';
output += 'This file contains notices and licenses for third-party libraries and modules\n';
output += 'used in the building and distribution of Syncromancer.\n\n';
output += 'Generated on: ' + new Date().toISOString() + '\n\n';

for (const [license, packages] of Object.entries(data)) {
  output += '------------------------------------------------------------------------------\n';
  output += `LICENSE: ${license}\n`;
  output += '------------------------------------------------------------------------------\n\n';

  for (const pkg of packages) {
    output += `Package: ${pkg.name} (${pkg.versions ? pkg.versions.join(', ') : 'unknown'})\n`;
    if (pkg.homepage) output += `Homepage: ${pkg.homepage}\n`;
    if (pkg.description) output += `Description: ${pkg.description}\n`;
    output += '\n';
  }
}

const targetPath = path.join(__dirname, '..', 'public', 'THIRD_PARTY_NOTICES.txt');
fs.writeFileSync(targetPath, output);
console.log(`Saved ${targetPath} (${output.length} bytes)`);
