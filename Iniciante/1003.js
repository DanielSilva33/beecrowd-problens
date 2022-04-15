const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let A = parseInt(lines.shift());
let B = parseInt(lines.shift());

const soma = A + B;

console.log("SOMA = " + soma);