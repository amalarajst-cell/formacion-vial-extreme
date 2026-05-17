const fs = require('fs');
const path = require('path');

const xmlPath = path.join(__dirname, 'docx_extracted', 'word', 'document.xml');
const outputPath = path.join(__dirname, 'clean_text.txt');

console.log('Reading XML from:', xmlPath);
if (!fs.existsSync(xmlPath)) {
    console.error('Error: document.xml not found!');
    process.exit(1);
}

const xmlContent = fs.readFileSync(xmlPath, 'utf8');
console.log('XML file size:', xmlContent.length, 'characters');

console.log('Extracting <w:t> tags...');
const matches = xmlContent.match(/<w:t[^>]*>(.*?)<\/w:t>/g) || [];
console.log('Found', matches.length, '<w:t> elements');

let text = '';
// In document.xml, paragraphs are structured with <w:p> elements.
// Let's split the XML by <w:p> to preserve paragraphs/newlines.
const paragraphs = xmlContent.split(/<w:p\b[^>]*>/);
console.log('Processed', paragraphs.length, 'paragraphs');

const cleanParagraphs = paragraphs.map(p => {
    const tMatches = p.match(/<w:t[^>]*>(.*?)<\/w:t>/g) || [];
    const pText = tMatches.map(t => {
        const innerText = t.replace(/<[^>]+>/g, '');
        // Decode common XML entities
        return innerText
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&apos;/g, "'");
    }).join('');
    return pText.trim();
}).filter(p => p.length > 0);

console.log('Writing clean text to:', outputPath);
fs.writeFileSync(outputPath, cleanParagraphs.join('\n'), 'utf8');
console.log('Done!');
