
const fs = require('fs');
const path = require('path');

const signsPath = path.join(__dirname, 'src', 'data', 'signs.ts');
const assetsDir = path.join(__dirname, 'public', 'assets', 'senales');

// Ensure directory exists
if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
}

// Read signs.ts
const content = fs.readFileSync(signsPath, 'utf-8');

// Regex to find variable names and base64 content
// Matches: const pareImg = "data:image/svg+xml;base64,.....";
const regex = /const\s+(\w+)Img\s*=\s*"data:image\/svg\+xml;base64,([^"]+)";/g;

let match;
let count = 0;

console.log('Starting migration...');

while ((match = regex.exec(content)) !== null) {
    const varName = match[1]; // e.g., 'pare' from 'pareImg'
    const base64Data = match[2];

    // Camel case to kebab-case-ish (optional, but keep simple for now, stick to var name base)
    // Actually, preserving the var name base effectively is safest for now.
    // e.g. pare.svg, prohibidoMotos.svg

    const fileName = `${varName}.svg`;
    const filePath = path.join(assetsDir, fileName);

    // Decode base64
    const svgContent = Buffer.from(base64Data, 'base64').toString('utf-8');

    fs.writeFileSync(filePath, svgContent);
    console.log(`Saved: ${fileName}`);
    count++;
}

console.log(`\nMigration complete. ${count} files created in ${assetsDir}.`);
