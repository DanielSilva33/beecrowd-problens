const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let line = lines.shift().split(" ");

let valor = parseInt(line[0]);
let qtd = parseInt(line[1]);

const price = [4.00, 4.50, 5.00, 2.00, 1.50];

const total = (valor, qtd) => {
    const calc = price[valor - 1] * qtd;

    return calc.toFixed(2);
}

console.log(`Total: R$ ${total(valor, qtd)}`);