const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let line = lines.shift().split(" ");

let A = parseFloat(line[0]);
let B = parseFloat(line[1]);

if(A % B === 0 || B % A === 0) {
    console.log("Sao Multiplos");
} else {
    console.log("Nao sao Multiplos");
}