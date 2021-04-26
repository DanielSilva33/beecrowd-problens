var input = require('fs').readFileSync('stdin', 'utf8'); //padrão para pegar os inputs do arquivo, não precisa enviar para o uri
var lines = input.split('\n'); // para separar os numeros do input por quebra de linha 

var A = parseInt(lines.shift()); //para pegar somente um numero do input e jogar ele na variavel
var B = parseInt(lines.shift()); //aqui ele pega o segundo numero do input e joga na segunda variavel

//Fazendo o calculo pedido no exercicio

var X = A + B;

console.log("X = " + X);