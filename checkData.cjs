const fs = require('fs');
const content = fs.readFileSync('./src/data/simulatorQuestions.ts', 'utf8');
const lines = content.split('\n');
let found = 0;
for (let i = 0; i < lines.length; i++) {
    // Check for curly quotes, backticks in string values, or other problematic chars
    if (lines[i].includes('\u201c') || lines[i].includes('\u201d') || 
        lines[i].includes('\u2018') || lines[i].includes('\u2019') ||
        lines[i].includes('`')) {
        console.log('LINE ' + (i+1) + ': ' + lines[i].substring(0, 120));
        found++;
        if (found > 20) { console.log('...and more'); break; }
    }
}
if (found === 0) console.log('No curly quotes or backticks found');

// Also try to find any line that might cause a parse error
// Check for unescaped backslashes
found = 0;
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('\\n') || lines[i].includes('\\r')) {
        console.log('BACKSLASH-N at LINE ' + (i+1) + ': ' + lines[i].substring(0, 120));
        found++;
        if (found > 5) { console.log('...and more'); break; }
    }
}
if (found === 0) console.log('No escaped newlines found');
