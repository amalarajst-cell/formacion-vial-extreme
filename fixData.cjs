const fs = require('fs');

let content = fs.readFileSync('./src/data/simulatorQuestions.ts', 'utf8');

// Replace curly/smart quotes with regular straight quotes
content = content
    .replace(/\u201c/g, '\\"')   // " → \"
    .replace(/\u201d/g, '\\"')   // " → \"
    .replace(/\u2018/g, "'")     // ' → '
    .replace(/\u2019/g, "'");    // ' → '

fs.writeFileSync('./src/data/simulatorQuestions.ts', content, 'utf8');
console.log('Fixed! Replaced curly quotes with straight quotes.');

// Verify no more curly quotes
const lines = content.split('\n');
let found = 0;
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('\u201c') || lines[i].includes('\u201d') ||
        lines[i].includes('\u2018') || lines[i].includes('\u2019')) {
        found++;
    }
}
console.log('Remaining curly quotes:', found);
