const XLSX = require('xlsx');
const path = require('path');

const EXCEL_FILE = path.join('Excel y fotos', 'Preguntas Sep 2023 - ultima versión (1).xlsx');
const wb = XLSX.readFile(EXCEL_FILE);
const ws = wb.Sheets[wb.SheetNames[0]];
const rawData = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });

for (let i = 1; i < rawData.length; i++) {
    if (String(rawData[i][7]) === '5' || String(rawData[i][8]) === '5') {
        console.log(`Row ${i}:`, JSON.stringify(rawData[i]));
    }
}
