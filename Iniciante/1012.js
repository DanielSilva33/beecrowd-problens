const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let infoItem1 = lines.shift().split(" ");

const pi = 3.14159;

let item1 = parseFloat(infoItem1[0]);
let item2 = parseFloat(infoItem1[1]);
let item3 = parseFloat(infoItem1[2]);


function triangulo(item1, item3) {
    const calc = item1 * item3 / 2;
    return calc;
}

function circulo(item3) {
    const calc = pi * Math.pow(item3, 2);
    return calc;
}

function trapezio(item1, item2, item3) {
    const calc = (item1 + item2) * item3 / 2;
    return calc;
}

function quadrado(item2) {
    const calc = Math.pow(item2, 2);
    return calc;
}

function retangulo(item1, item2) {
    const calc = item1 * item2;
    return calc;
}


console.log("TRIANGULO: " + triangulo(item1, item3).toFixed(3));
console.log("CIRCULO: " + circulo(item3).toFixed(3));
console.log("TRAPEZIO: " + trapezio(item1, item2, item3).toFixed(3));
console.log("QUADRADO: " + quadrado(item2).toFixed(3));
console.log("RETANGULO: " + retangulo(item1, item2).toFixed(3));