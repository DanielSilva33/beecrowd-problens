const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let line = lines.shift().split(" ");

let A = parseFloat(line[0]);
let B = parseFloat(line[1]);
let C = parseFloat(line[2]);
let D = parseFloat(line[3]);


if ((B > C) && (D > A) && (C + D) > (A + B) && (C > 0) && (D > 0) && (A % 2 === 0)) {
    console.log("Valores aceitos")
}else {
    console.log("Valores nao aceitos")
}