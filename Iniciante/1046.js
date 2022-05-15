const input = require("fs").readFileSync("stdin", "utf8");
const lines = input.split("\n");

let line = lines.shift().split(" ");

let hoursInitial = parseInt(line[0]);
let hoursFinal = parseInt(line[1]);

if (hoursInitial > hoursFinal) {
  const calc = 24 - (hoursInitial - hoursFinal);
  console.log(`O JOGO DUROU ${calc} HORA(S)`);
} else if (hoursFinal > hoursInitial) {
  const calc = hoursFinal - hoursInitial;
  console.log(`O JOGO DUROU ${calc} HORA(S)`);
} else {
  console.log("O JOGO DUROU 24 HORA(S)");
}
