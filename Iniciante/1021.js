const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let banknotes = parseFloat(lines.shift());

const notas = [100, 50, 20, 10, 5, 2];
const coins = [1, 0.50, 0.25, 0.10, 0.05, 0.01];


console.log(`NOTAS:`);
for (let nota of notas) {
    let qtdNotas = parseInt(banknotes / nota);
    console.log(`${qtdNotas} nota(s) de R$ ${nota.toFixed(2)}`);
    banknotes = banknotes % nota;
}

console.log(`MOEDAS:`);
for (let coin of coins) {
    let qtdCoin = parseInt(banknotes / coin);
    console.log(`${qtdCoin} moeda(s) de R$ ${coin.toFixed(2)}`);
    banknotes = (banknotes % coin) + 0.00001;
}