const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let km = parseInt(lines.shift());

const minutes = (60 * km) / 30;

console.log(`${minutes} minutos`);