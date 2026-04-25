const fs = require('fs');
const content = fs.readFileSync('./src/pages/SimuladorTeorico.tsx', 'utf8');
// Check for non-ASCII or problematic characters
const lines = content.split('\n');
console.log('Total lines:', lines.length);
console.log('File size:', content.length);

// Check for curly quotes
let found = 0;
for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
        const code = lines[i].charCodeAt(j);
        if (code > 127 && code !== 193 && code !== 233 && code !== 237 && code !== 243 && code !== 250 && code !== 225 && code !== 241 && code !== 161 && code !== 191 && code !== 176) {
            // Might be a problem char
            if (code === 0x201C || code === 0x201D || code === 0x2018 || code === 0x2019 || code === 0x60) {
                console.log('PROBLEM CHAR at line', i+1, 'col', j, 'code:', code.toString(16), lines[i].substring(Math.max(0,j-10), j+10));
                found++;
                if (found > 10) break;
            }
        }
    }
    if (found > 10) break;
}
if (found === 0) console.log('No curly quotes or backtick issues found in TSX');

// Print first 30 lines
console.log('\n--- First 30 lines ---');
lines.slice(0, 30).forEach((l, i) => console.log((i+1) + ': ' + l));
