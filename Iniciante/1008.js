var input = require('fs').readFileSync('stdin', 'utf8'); //Padrão do URI
var lines = input.split('\n'); //Sepandando os numeros do arquivo por quebra de linha

var numeroFuncionario = parseInt(lines.shift()); //Armazenando o numero dentro de uma variavel
var horasTrabalhadas = parseInt(lines.shift()); //Armazenando o numero dentro de uma variavel
var salario = parseFloat(lines.shift()); //Armazenando o numero dentro de uma variavel

var calculoSalario = horasTrabalhadas * salario;

console.log("NUMBER = " + numeroFuncionario);
console.log("SALARY = U$ " + calculoSalario.toFixed(2));
