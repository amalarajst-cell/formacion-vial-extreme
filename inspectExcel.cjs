const XLSX = require('xlsx');
const wb = XLSX.readFile('Excel y fotos/Preguntas Sep 2023 - ultima versión (1).xlsx');
const ws = wb.Sheets[wb.SheetNames[0]];
const data = XLSX.utils.sheet_to_json(ws, {header:1, defval: ''});
console.log(JSON.stringify(data.slice(0, 50), null, 2));
