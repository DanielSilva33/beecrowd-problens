const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let hours = parseInt(lines.shift());
let km = parseInt(lines.shift());

const averageDistance = (hours * km) / 12;

console.log(`${averageDistance.toFixed(3)}`);