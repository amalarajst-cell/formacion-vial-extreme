const XLSX = require('xlsx');
const path = require('path');

const EXCEL_FILE = path.join('Excel y fotos', 'Preguntas Sep 2023 - ultima versión (1).xlsx');
const wb = XLSX.readFile(EXCEL_FILE);
const ws = wb.Sheets[wb.SheetNames[0]];
const rawData = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });

console.log('--- FINDING ROWS WITH IMAGES (Col H, index 7) ---');
let found = 0;
for (let i = 0; i < rawData.length; i++) {
    const row = rawData[i];
    if (row[7] && String(row[7]).trim() !== '') {
        console.log(`Row ${i}:`, JSON.stringify(row));
        found++;
        if (found > 10) break;
    }
}
