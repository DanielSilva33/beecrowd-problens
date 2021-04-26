var input = require('fs').readFileSync('stdin', 'utf8'); //Padrão do URI
var lines = input.split('\n'); //Sepandando os numeros do arquivo por quebra de linha

var raio = parseFloat(lines); //Armazenando o numero dentro de uma variavel

const PI = 3.14159; //Const do PI 

//Calculando o valor de A conforme o exercicio

var area = PI * Math.pow(raio, 2);

console.log('A=' + area.toFixed(4)); //TOFIXED para ter apenas 4 casas após o ponto decimal