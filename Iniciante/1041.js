const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let line = lines.shift().split(" ");

let X = parseFloat(line[0]);
let Y = parseFloat(line[1]);

if (X === 0 && Y === 0) {
    console.log("Origem");
} else if (X === 0) {
    console.log("Eixo Y");
} else if (Y === 0) {
    console.log("Eixo X");
} else if (X > 0 && Y > 0) {
    console.log("Q1");
} else if (X > 0 && Y < 0) {
    console.log("Q4");
} else if (X < 0 && Y < 0) {
    console.log("Q3");
} else if (X < 0 && Y > 0) {
    console.log("Q2");
} 