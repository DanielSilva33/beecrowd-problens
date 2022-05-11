const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let line = lines.shift().split(" ");

let A = parseInt(line[0]);
let B = parseInt(line[1]);
let C = parseInt(line[2]);


if (A < B && A < C) {
    console.log(A);
    if (B < C) {
        console.log(B);
        console.log(C);
    } else {
        console.log(C);
        console.log(B);
    }
} else if (B < C) {
    console.log(B);
    if (A < C) {
        console.log(A);
        console.log(C);
    } else {
        console.log(C);
        console.log(A);
    }
} else {
    console.log(C);
    if (A < B) {
        console.log(A);
        console.log(B);
    } else {
        console.log(B);
        console.log(A);
    }
}

console.log("");
console.log(A);
console.log(B);
console.log(C);