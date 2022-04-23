const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let p1 = lines.shift().split(" ");
let p2 = lines.shift().split(" ");

let x1 = parseFloat(p1[0]);
let y1 = parseFloat(p1[1]);
let x2 = parseFloat(p2[0]);
let y2 = parseFloat(p2[1]);


const calc = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

console.log(`${calc.toFixed(4)}`);