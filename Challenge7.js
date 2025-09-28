const prompt = require("prompt-sync")();


 let rayon = +prompt("Entrer le rayon d’un cercle : ");

 let C = 2 * Math.PI * rayon
 
 console.log("circonférence : "+C);
