const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let line = lines.shift().split(" ");

let A = parseFloat(line[0]);
let B = parseFloat(line[1]);
let C = parseFloat(line[2]);


const delta = Math.pow(B , 2) - (4 * A * C);

if (delta < 0 || A === 0) {
    console.log("Impossivel calcular")
} else {
    const R1 = (((-1 * B) + Math.pow(delta, 0.5)) / (2 * A ));
    const R2 = (((-1 * B) - Math.pow(delta, 0.5)) / (2 * A ));

    console.log(`R1 = ${R1.toFixed(5)}`);
    console.log(`R2 = ${R2.toFixed(5)}`);
}
