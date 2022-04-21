const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let infoItem1 = lines.shift().split(" ");

let item1 = parseInt(infoItem1[0]);
let item2 = parseInt(infoItem1[1]);
let item3 = parseInt(infoItem1[2]);


let result = parseInt((item1 + item2 + Math.abs(item1 - item2)) / 2);

let maior = parseInt((result + item3 + Math.abs(result - item3)) / 2);

console.log(maior + " eh o maior");