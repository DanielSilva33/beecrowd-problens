const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

let line = lines.shift().split(" ");
let line2 = parseFloat(lines.shift());

let N1 = parseFloat(line[0]);
let N2 = parseFloat(line[1]);
let N3 = parseFloat(line[2]);
let N4 = parseFloat(line[3]);


const media = parseFloat(((N1 * 2) + (N2 * 3) + (N3 * 4) + (N4 * 1)) / 10).toFixed(1);
console.log(`Media: ${media}`);

function mediaPonderada() {
    return ((N1 * 2) + (N2 * 3) + (N3 * 4) + N4 * 1) / 10
}

function exame() {
    return (line2 + mediaPonderada()) / 2
}

if(mediaPonderada() >= 7.0) {
    console.log("Aluno aprovado.");
} else if (mediaPonderada() < 5.0) {
    console.log("Aluno reprovado.");
} else if (mediaPonderada() >= 5.0 && mediaPonderada() <= 6.9) {

    console.log("Aluno em exame.");
    console.log(`Nota do exame: ${line2.toFixed(1)}`);

    if (exame() >= 5.0 ) {
        console.log("Aluno aprovado.");
        console.log(`Media final: ${exame().toFixed(1)}`);
    } else if (exame() <= 4.9) {
        console.log("Aluno reprovado.");
        console.log(`Media final: ${exame().toFixed(1)}`);
    }
}

