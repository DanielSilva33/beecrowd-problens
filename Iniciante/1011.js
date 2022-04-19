const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let raio = parseFloat(lines.shift());

const pi = 3.14159;

const esfera = (4/3.0) * pi * Math.pow(raio, 3);

console.log("VOLUME = " + esfera.toFixed(3));