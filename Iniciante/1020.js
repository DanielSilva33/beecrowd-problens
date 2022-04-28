const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let days = parseInt(lines.shift());

const total = [365, 30, 1];
const year = [];

for (let result of total) {
    year.push( parseInt(days / result) );
    days = days % result;
}

console.log(`${year[0]} ano(s)`);
console.log(`${year[1]} mes(es)`);
console.log(`${year[2]} dia(s)`);
