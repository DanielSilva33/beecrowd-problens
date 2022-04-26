const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let banknotes = parseInt(lines.shift());

console.log(banknotes);

const notas = [100, 50, 20, 10, 5, 2 , 1];

for (let nota of notas) {
    let qtdNotas = parseInt(banknotes / nota);
    console.log(`${qtdNotas} nota(s) de R$ ${nota},00`);
    banknotes = banknotes % nota;
}

