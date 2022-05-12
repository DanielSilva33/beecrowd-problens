const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let line = lines.shift().split(" ");

let A = parseFloat(line[0]);
let B = parseFloat(line[1]);
let C = parseFloat(line[2]);


if (A < B + C && B < A + C && C < A + B) {
    const calc = A + B + C;
    console.log(`Perimetro = ${calc.toFixed(1)}`);
} else {
    const calc = ((A + B) * C) /2;
    console.log(`Area = ${calc.toFixed(1)}`);
}