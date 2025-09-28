const prompt = require("prompt-sync")();


let distance = +prompt("Entrer la distance en km : ");
let vitesse = +prompt("Entrer la vitesse de voiture en km/h: ");

let temps = distance/vitesse;
console.log("le temps de trajet : "+temps+" h");

