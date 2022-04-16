let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');

let employeeNumber = parseInt(lines.shift());
let hoursWork = parseInt(lines.shift());
let employeeSalary = parseFloat(lines.shift());

const salary = hoursWork * employeeSalary;

console.log("NUMBER = " + employeeNumber);
console.log("SALARY = U$ " + salary.toFixed(2));
