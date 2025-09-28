const prompt = require("prompt-sync")();


 let nombre = prompt("Entrer un nombre entier à 3 chiffres : ");

 let inverse = nombre.split("").reverse().join("");

 console.log("l'inverse : "+inverse);