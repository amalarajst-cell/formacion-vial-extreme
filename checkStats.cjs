const data = require('./src/data/simulatorQuestions.json');
const noOpts = data.filter(q => q.options.length === 0);
console.log('Sin opciones:', noOpts.length);
console.log('Con imagen:', data.filter(q => q.image).length);
console.log('Total:', data.length);
console.log('Ejemplos sin opciones:', noOpts.slice(0,5).map(q => q.id + ': ' + q.question.substring(0,50)));
