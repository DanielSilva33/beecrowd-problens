const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let dist = parseInt(lines.shift());

const calc = (60 * dist) / 30;

console.log(`${calc} minutos`);