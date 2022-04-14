let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');

let A = parseFloat(lines.shift());

const n = 3.14159;

const calculo = n * Math.pow(A, 2);
const area = calculo.toFixed(4);

console.log("A=" + area);
