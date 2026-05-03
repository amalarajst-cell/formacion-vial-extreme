const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const EXCEL_FILE = 'Preguntas Sep 2023 - ultima versión (1).xlsx';
const FOTOS_BASE = path.join('FOTO EXAMEN', 'Fotos examen teórico');
const OUTPUT_JSON = path.join('src', 'data', 'simulatorQuestions.json');
const OUTPUT_IMAGES = path.join('public', 'simulator', 'images');

function cleanText(t) {
    if (t === null || t === undefined) return '';
    return String(t)
        .replace(/\u201c|\u201d/g, '"')
        .replace(/\u2018|\u2019/g, "'")
        .replace(/^[A-Z]\.\s+/, '')
        .replace(/\n|\r/g, ' ')
        .trim();
}

function isPlaceholder(text) {
    const t = text.toLowerCase().trim();
    return t === 'opción a.' || t === 'opción b.' || t === 'opción c.' || t === 'opción d.' || t === 'opción e.';
}

function padNum(n) {
    if (!n) return '000';
    return String(parseInt(n)).padStart(3, '0');
}

function findPhoto(imageNum) {
    if (!imageNum || imageNum === '' || String(imageNum).trim() === '') return null;
    const numStr = String(imageNum).trim();
    if (isNaN(parseInt(numStr))) return null;
    const padded = padNum(numStr);

    const rangeFolders = ['001 - 100', '101 - 200', '201 -300', '301 - 400'];
    for (var rIdx = 0; rIdx < rangeFolders.length; rIdx++) {
        const range = rangeFolders[rIdx];
        const questionFolder = path.join(FOTOS_BASE, range, padded);
        if (fs.existsSync(questionFolder)) {
            const hFile = path.join(questionFolder, padded + '-H.png');
            const lFile = path.join(questionFolder, padded + '-L.png');
            if (fs.existsSync(hFile)) return hFile;
            if (fs.existsSync(lFile)) return lFile;
            const files = fs.readdirSync(questionFolder).filter(function(f) { return /\.(png|jpg|jpeg|gif|webp)$/i.test(f); });
            if (files.length > 0) return path.join(questionFolder, files[0]);
        }
    }
    for (var sIdx = 0; sIdx < 2; sIdx++) {
        const special = ['grandes', 'gráficos'][sIdx];
        const specialFolder = path.join(FOTOS_BASE, special);
        if (fs.existsSync(specialFolder)) {
            const questionFolder = path.join(specialFolder, padded);
            if (fs.existsSync(questionFolder)) {
                const files = fs.readdirSync(questionFolder).filter(function(f) { return /\.(png|jpg|jpeg|gif|webp)$/i.test(f); });
                if (files.length > 0) return path.join(questionFolder, files[0]);
            }
        }
    }
    return null;
}

function copyPhoto(srcPath, imageNum, questionId) {
    if (!srcPath) return null;
    var ext = path.extname(srcPath);
    // Use the original image number in the filename for easier debugging
    var destName = 'q_' + String(questionId).replace(/[^a-z0-9]/gi, '_') + '_img' + padNum(imageNum) + ext;
    var destPath = path.join(OUTPUT_IMAGES, destName);
    try {
        fs.copyFileSync(srcPath, destPath);
        return '/simulator/images/' + destName;
    } catch(e) {
        console.warn('Warning copy:', e.message);
        return null;
    }
}

console.log('=== Generando simulatorQuestions.json desde Excel (MAPEO COLUMNA C) ===');
console.log('NOTA: Se usa la Columna C (Nº) para el número de imagen.');

if (!fs.existsSync(OUTPUT_IMAGES)) {
    fs.mkdirSync(OUTPUT_IMAGES, { recursive: true });
} else {
    var oldImages = fs.readdirSync(OUTPUT_IMAGES).filter(function(f) { return f.startsWith('q_'); });
    console.log('Eliminando ' + oldImages.length + ' imágenes antiguas...');
    oldImages.forEach(function(f) { fs.unlinkSync(path.join(OUTPUT_IMAGES, f)); });
}

if (!fs.existsSync(EXCEL_FILE)) {
    console.error('ERROR: No se encontró:', EXCEL_FILE);
    process.exit(1);
}

var wb = XLSX.readFile(EXCEL_FILE, { raw: false });
var sheetName = wb.SheetNames[0];
var ws = wb.Sheets[sheetName];
var rawData = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '' });

console.log('Hoja: ' + sheetName + ', Filas: ' + rawData.length);

var questionsMap = new Map();
var lastNro = null;
var lastPregunta = '';
var lastManual = '';
var lastTema = '';
var currentQ = null;

for (var i = 1; i < rawData.length; i++) {
    var row = rawData[i];
    
    // Column C [2] is the Image Number / Question ID
    var nro = String(row[2] || '').trim();
    var pregunta = cleanText(row[4]);
    var respuesta = cleanText(row[5]);
    var correcta = String(row[6] || '').trim().toUpperCase() === 'X';
    var manual = cleanText(row[9]);
    var tema = cleanText(row[10]);

    // If row has a number in Column C, it's a new question or a sub-category repetition
    if (nro !== '') {
        lastNro = nro;
        if (pregunta !== '') {
            lastPregunta = pregunta;
            lastManual = manual;
            lastTema = tema;
        }
    }

    if (!respuesta) continue;

    // Use Question Text + Number as a unique key to avoid merging different questions that might have same number
    // But usually same number means same question.
    var qKey = lastPregunta + '_' + lastNro;

    if (!questionsMap.has(qKey)) {
        currentQ = {
            id: lastNro,
            question: lastPregunta,
            options: [],
            tema: lastTema,
            manual: lastManual,
            image: null,
            _imgNum: lastNro // Column C is the image number
        };
        questionsMap.set(qKey, currentQ);
    } else {
        currentQ = questionsMap.get(qKey);
    }

    if (isPlaceholder(respuesta)) {
        // Skip placeholders but keep the question
        continue;
    }

    var exists = currentQ.options.some(function(o) { return o.text === respuesta; });
    if (!exists && respuesta !== '') {
        currentQ.options.push({ text: respuesta, isCorrect: correcta });
    }
}

console.log('\nAsignando imágenes desde carpetas...');
var photoCopied = 0;
var photosNotFound = [];

for (var entry of questionsMap) {
    var q = entry[1];
    var imgNum = q._imgNum;
    if (imgNum) {
        var photoSrc = findPhoto(imgNum);
        if (photoSrc) {
            var imgUrl = copyPhoto(photoSrc, imgNum, q.id);
            if (imgUrl) {
                q.image = imgUrl;
                photoCopied++;
            }
        } else {
            photosNotFound.push('Q' + q.id + ' (carpeta: ' + imgNum + ')');
        }
    }
    delete q._imgNum;
}

var finalQuestions = Array.from(questionsMap.values()).filter(function(q) {
    if (q.options.length === 0) return false;
    var hasCorrect = q.options.some(function(o) { return o.isCorrect; });
    return q.options.length >= 2 && hasCorrect;
});

finalQuestions.forEach(function(q) {
    if (!q.image) delete q.image;
});

console.log('\nPreguntas válidas: ' + finalQuestions.length);
console.log('Fotos copiadas: ' + photoCopied);
console.log('Fotos no encontradas: ' + photosNotFound.length);

fs.writeFileSync(OUTPUT_JSON, JSON.stringify(finalQuestions, null, 2), 'utf8');
console.log('\nGuardado: ' + OUTPUT_JSON);

var tsContent = 'export interface SimulatorOption {\n    text: string;\n    isCorrect: boolean;\n}\n\nexport interface SimulatorQuestion {\n    id: string;\n    question: string;\n    options: SimulatorOption[];\n    tema: string;\n    manual: string;\n    image?: string;\n    needsImage?: boolean;\n}\n\nimport rawQuestions from \'./simulatorQuestions.json\';\nexport const simulatorQuestions: SimulatorQuestion[] = rawQuestions as SimulatorQuestion[];\n';
fs.writeFileSync(path.join('src', 'data', 'simulatorQuestions.ts'), tsContent, 'utf8');
console.log('Guardado: src/data/simulatorQuestions.ts');

console.log('\n=== MUESTRA ===');
finalQuestions.slice(0, 3).forEach(function(q) {
    console.log('Q' + q.id + ': ' + q.question.substring(0,50));
    console.log('  img: ' + (q.image || 'no-image'));
});
