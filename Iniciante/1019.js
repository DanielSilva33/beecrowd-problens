const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let seconds = parseInt(lines.shift());

const valors = [3600, 60, 1];
const result = [];

for (let valor of valors) {
    result.push( parseInt(seconds / valor) );
    seconds = seconds % valor;
}

console.log(result.join(":"));
