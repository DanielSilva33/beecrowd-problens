var input = require('fs').readFileSync('stdin', 'utf8'); //Padrão do URI
var lines = input.split('\n'); //Sepandando os numeros do arquivo por quebra de linha

var linha = lines.shift().split(" "); // split para separar os numeros pelo espaço

var A = parseFloat(linha.shift()); //Armazenando o numero dentro de uma variavel
var B = parseFloat(linha.shift()); //Armazenando o numero dentro de uma variavel
var C = parseFloat(linha.shift()); //Armazenando o numero dentro de uma variavel

const PI = 3.14159;

function trianguloRetangulo() {
    var area = (A * C) / 2;
    console.log("TRIANGULO: " + area.toFixed(3));
}

function circulo() {
    var area = PI * Math.pow(C, 2);
    console.log("CIRCULO: " + area.toFixed(3));
}

function trapezio() {
    var area = (A + B) * C /2;
    console.log("TRAPEZIO: " + area.toFixed(3));
}


function quadrado() {
    var area = B * B;
    console.log("QUADRADO: " + area.toFixed(3));
}

function retangulo() {
    var area = A * B;
    console.log("RETANGULO: " + area.toFixed(3));
}

trianguloRetangulo();
circulo();
trapezio();
quadrado();
retangulo();




