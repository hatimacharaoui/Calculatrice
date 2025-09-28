const prompt = require("prompt-sync")();


let nombre1 = +prompt("Entrer le nombre 1 : ");
let nombre2 = +prompt("Entrer le nombre 2 : ");
let nombre3 = +prompt("Entrer le nombre 3 : ");
let nombre4 = +prompt("Entrer le nombre 4 : ");

console.log("la somme : "+(nombre1+nombre2+nombre3+nombre4));
console.log("la moyenne : "+((nombre1+nombre2+nombre3+nombre4)/4));