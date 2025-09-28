const prompt = require("prompt-sync")();

let a = +prompt("Entrer un entier 'a': ");
let b = +prompt("Entrer un entier 'b': ");

console.log("a + b = "+(a+b));
console.log("a - b = "+(a-b));
console.log("a * b = "+(a*b));
console.log("a / b = "+(a/b));
console.log("a % b = "+(a%b));