const input = require("fs").readFileSync("stdin", "utf8");
const lines = input.split("\n");

let salary = parseFloat(lines.shift());

let percent = 0;
let salaryTotal = 0;

if (salary >= 0 && salary <= 400) {
  percent = salary * 0.15;
  salaryTotal = salary + percent;
  console.log(`Novo salario: ${salaryTotal.toFixed(2)}`);
  console.log(`Reajuste ganho: ${percent.toFixed(2)}`);
  console.log("Em percentual: 15 %");
} else if (salary >= 400.01 && salary <= 800) {
  percent = salary * 0.12;
  salaryTotal = salary + percent;
  console.log(`Novo salario: ${salaryTotal.toFixed(2)}`);
  console.log(`Reajuste ganho: ${percent.toFixed(2)}`);
  console.log("Em percentual: 12 %");
} else if (salary >= 800.01 && salary <= 1200) {
  percent = salary * 0.1;
  salaryTotal = salary + percent;
  console.log(`Novo salario: ${salaryTotal.toFixed(2)}`);
  console.log(`Reajuste ganho: ${percent.toFixed(2)}`);
  console.log("Em percentual: 10 %");
} else if (salary >= 1200.01 && salary <= 2000) {
  percent = salary * 0.07;
  salaryTotal = salary + percent;
  console.log(`Novo salario: ${salaryTotal.toFixed(2)}`);
  console.log(`Reajuste ganho: ${percent.toFixed(2)}`);
  console.log("Em percentual: 7 %");
} else {
  percent = salary * 0.04;
  salaryTotal = salary + percent;
  console.log(`Novo salario: ${salaryTotal.toFixed(2)}`);
  console.log(`Reajuste ganho: ${percent.toFixed(2)}`);
  console.log("Em percentual: 4 %");
}
