const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let infoItem1 = lines.shift().split(" ");
let infoItem2 = lines.shift().split(" ");

let idItem1 = parseInt(infoItem1[0]);
let qtdItem1 = parseInt(infoItem1[1]);
let priceItem1 = parseFloat(infoItem1[2]);

let idItem2 = parseInt(infoItem2[0]);
let qtdItem2 = parseInt(infoItem2[1]);
let priceItem2 = parseFloat(infoItem2[2]);


let total = (qtdItem1 * priceItem1) + (qtdItem2 * priceItem2);

console.log("VALOR A PAGAR: R$ " + total.toFixed(2));


