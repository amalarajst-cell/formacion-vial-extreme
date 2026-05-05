const XLSX = require('xlsx');
const path = require('path');

const EXCEL_FILE = path.join('Excel y fotos', 'Preguntas Sep 2023 - ultima versión (1).xlsx');
const wb = XLSX.readFile(EXCEL_FILE);
const ws = wb.Sheets[wb.SheetNames[0]];
const rawData = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });

console.log('--- DETAIL FOR ID 193 ---');
let found = false;
for (let i = 1; i < rawData.length; i++) {
    if (String(rawData[i][2]) === '193') found = true;
    if (found) {
        console.log(`Row ${i+1}:`, JSON.stringify(rawData[i]));
        if (rawData[i+1] && rawData[i+1][2] !== '') break;
    }
}
