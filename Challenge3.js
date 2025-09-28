const prompt = require("prompt-sync")();

let A =10;
let B = 20;
let C = 30;

A = B
B = C
C = A

console.log("A: "+A+", B: "+B+", C: "+C);