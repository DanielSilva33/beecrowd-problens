var input = require('fs').readFileSync('stdin', 'utf8'); //Padrão do URI
var lines = input.split('\n'); //Sepandando os numeros do arquivo por quebra de linha

var linha1 = lines.shift().split(" "); // split para separar os numeros pelo espaço
var linha2 = lines.shift().split(" ");

var codigoPeca1 = parseInt(linha1.shift()); //Armazenando o numero dentro de uma variavel
var qtdPeca1 = parseInt(linha1.shift()); //Armazenando o numero dentro de uma variavel
var valorUnitario1 = parseFloat(linha1.shift()); //Armazenando o numero dentro de uma variavel
var codigoPeca2 = parseInt(linha2.shift()); //Armazenando o numero dentro de uma variavel
var qtdPeca2 = parseInt(linha2.shift()); //Armazenando o numero dentro de uma variavel
var valorUnitario2 = parseFloat(linha2.shift()); //Armazenando o numero dentro de uma variavel

var totalPagar = (qtdPeca1 * valorUnitario1) + (qtdPeca2 * valorUnitario2);

console.log("VALOR A PAGAR: R$ " + totalPagar.toFixed(2));
