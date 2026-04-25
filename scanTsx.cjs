const fs = require('fs');
const content = fs.readFileSync('./src/pages/SimuladorTeorico.tsx', 'utf8');
const bytes = Buffer.from(content, 'utf8');
console.log('File size:', bytes.length);
// Look for any char > 127 and print it with context
const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (let j = 0; j < line.length; j++) {
        const code = line.charCodeAt(j);
        if (code > 127) {
            console.log('Non-ASCII at line', i+1, 'col', j, 'char:', JSON.stringify(line[j]), 'code:', code.toString(16));
            console.log('Context:', JSON.stringify(line.substring(Math.max(0,j-20), j+20)));
        }
    }
}
console.log('Done scanning.');
