var input = require('fs').readFileSync('stdin', 'utf8'); //Padrão do URI
var lines = input.split('\n'); //Sepandando os numeros do arquivo por quebra de linha

var nota1 = parseFloat(lines.shift()); //Armazenando o numero dentro de uma variavel
var nota2 = parseFloat(lines.shift()); //Armazenando o numero dentro de uma variavel

var media = (nota1 * 3.5 + nota2 * 7.5) / 11.0

console.log("MEDIA = " + media.toFixed(5));