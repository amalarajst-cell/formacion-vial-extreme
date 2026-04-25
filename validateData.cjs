const fs = require('fs');
const content = fs.readFileSync('./src/data/simulatorQuestions.ts', 'utf8');

// Extract just the array part
const match = content.match(/export const simulatorQuestions[^=]+=\s*(\[[\s\S]*\]);/);
if (!match) {
    console.log('Could not extract array. Trying different approach...');
    // Find the start of the array
    const startIdx = content.indexOf('[');
    const endIdx = content.lastIndexOf(']');
    if (startIdx === -1 || endIdx === -1) {
        console.log('No array found!');
        process.exit(1);
    }
    const arr = content.substring(startIdx, endIdx + 1);
    try {
        const parsed = JSON.parse(arr);
        console.log('Valid JSON! Questions count:', parsed.length);
    } catch(e) {
        console.log('JSON parse error:', e.message);
        // Find which line
        const lines = arr.split('\n');
        const lineMatch = e.message.match(/position (\d+)/);
        if (lineMatch) {
            const pos = parseInt(lineMatch[1]);
            let charCount = 0;
            for (let i = 0; i < lines.length; i++) {
                charCount += lines[i].length + 1;
                if (charCount >= pos) {
                    console.log('Error around line', i+1, ':', lines[i].substring(0, 100));
                    console.log('Previous:', lines[i-1] ? lines[i-1].substring(0, 100) : 'N/A');
                    break;
                }
            }
        }
    }
} else {
    try {
        const parsed = JSON.parse(match[1]);
        console.log('Valid JSON! Questions count:', parsed.length);
    } catch(e) {
        console.log('JSON parse error:', e.message);
    }
}
