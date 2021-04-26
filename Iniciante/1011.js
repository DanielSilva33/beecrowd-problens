var input = require('fs').readFileSync('stdin', 'utf8'); //Padrão do URI
var lines = input.split('\n'); //Sepandando os numeros do arquivo por quebra de linha

var raio = parseFloat(lines.shift()); //Armazenando o numero dentro de uma variavel
const PI = 3.14159;

var volume = (4.0/3) * PI * Math.pow(raio, 3); //Math.pow para fazer o raio ao quadrado;

console.log("VOLUME = " + volume.toFixed(3));
