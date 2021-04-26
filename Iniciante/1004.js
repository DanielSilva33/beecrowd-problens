var input = require('fs').readFileSync('stdin', 'utf8'); //Padrão do URI
var lines = input.split('\n'); //Sepandando os numeros do arquivo por quebra de linha

var A = parseInt(lines.shift()); //Armazenando o numero dentro de uma variavel
var B = parseInt(lines.shift()); //Armazenando o numero dentro de uma variavel

var PROD = A * B;

console.log("PROD = " + PROD);