const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let kmH = parseInt(lines.shift());
let fuel = parseFloat(lines.shift());

const calc = kmH / fuel;

console.log(`${calc.toFixed(3)} km/l`);