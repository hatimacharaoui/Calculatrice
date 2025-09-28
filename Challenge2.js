const prompt = require("prompt-sync")();

let Celsius = +prompt("Entrer une température: ");

function température(Cels) {
  let fahrenheit = Cels * 1.8 + 32;
  return fahrenheit;
}

console.log(température(Celsius));