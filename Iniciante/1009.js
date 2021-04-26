var input = require('fs').readFileSync('stdin', 'utf8'); //Padrão do URI
var lines = input.split('\n'); //Sepandando os numeros do arquivo por quebra de linha

var nomeFuncionario = lines.shift(); //Armazenando o numero dentro de uma variavel
var salarioBase = parseFloat(lines.shift()); //Armazenando o numero dentro de uma variavel
var bonus = parseFloat(lines.shift()); //Armazenando o numero dentro de uma variavel

var calculoSalario = (bonus * 0.15) + salarioBase;

console.log("TOTAL = R$ " + calculoSalario.toFixed(2));
