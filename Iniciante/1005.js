const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());

let media = parseFloat(((A * 3.5) + (B * 7.5))/11).toFixed(5);

console.log("MEDIA = " + media);
