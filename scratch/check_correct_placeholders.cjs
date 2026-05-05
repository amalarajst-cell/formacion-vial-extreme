const XLSX = require('xlsx');
const path = require('path');

const EXCEL_FILE = path.join('Excel y fotos', 'Preguntas Sep 2023 - ultima versión (1).xlsx');
const wb = XLSX.readFile(EXCEL_FILE);
const ws = wb.Sheets[wb.SheetNames[0]];
const rawData = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });

const targetIds = ['3', '98', '193', '355', '361', '386', '394'];
for (const id of targetIds) {
    for (let i = 1; i < rawData.length; i++) {
        if (String(rawData[i][2]) === id && String(rawData[i][6]).trim().toUpperCase() === 'X') {
            console.log(`ID ${id}: Correct is Option ${rawData[i][5].substring(0, 1)}`);
        }
    }
}
