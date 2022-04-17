let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');

let name = lines.shift();
let salary = parseFloat(lines.shift());
let bonus = parseFloat(lines.shift());

const calculo =  (bonus * 15) / 100;

const salaryFinal = (calculo, salary) => {
    return calculo + salary
    
}

console.log("TOTAL = R$ ", salaryFinal(calculo, salary).toFixed(2));


