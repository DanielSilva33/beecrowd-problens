const input = require("fs").readFileSync("stdin", "utf8");
const lines = input.split("\n");

let line = lines.shift().split(" ");

let hoursInitial = parseInt(line[0]);
let minuteInitial = parseInt(line[1]);
let hoursFinal = parseInt(line[2]);
let minuteFinal = parseInt(line[3]);

let totalHours = hoursFinal - hoursInitial;
let totalMinute = minuteFinal - minuteInitial;

if (totalHours <= 0) {
  totalHours = 24 + (hoursFinal - hoursInitial);
}

if (totalMinute <= 0) {
  totalMinute = 60 + (minuteFinal - minuteInitial);
  totalHours--;
}

if (hoursInitial === hoursFinal && minuteInitial === minuteFinal) {
  console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
} else {
  console.log(`O JOGO DUROU ${totalHours} HORA(S) E ${totalMinute} MINUTO(S)`);
}
