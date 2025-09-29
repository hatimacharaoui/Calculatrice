const prompt = require("prompt-sync")();

function Addition(nbr1, nb2) {
  let addition = nbr1 + nb2;
  return addition;
}
function Soustraction(nbr1, nb2) {
  let soustraction = nbr1 - nb2;
  return soustraction;
}
function Multiplication(nbr1, nb2) {
  let multiplication = nbr1 * nb2;
  return multiplication;
}
function Division(nbr1, nb2) {
  let division = nbr1 / nb2;
  return division;
}
function Puissance(nbr1, nb2) {
  let puissance = Math.pow(nbr1, nb2);
  return puissance;
}
function RacineCarrée(nbr1) {
  let racine = Math.sqrt(nbr1);
  return racine;
}
function Factorielle(nbr1) {
  let resultat = 1;
  for (let i = 1; i <= nbr1; i++) {
    resultat *= i;
    return resultat;
  }
}
function calculer() {
  let choix;
  let repeter;
  let tableau = [];
  do {
    do {
      console.log("*******  Choisir une opération:  *******");
      console.log("Pour l'Addition entrer (1): ");
      console.log("Pour la Soustraction entrer (2): ");
      console.log("Pour la Multiplication entrer (3): ");
      console.log("Pour la Division entrer (4): ");
      console.log("Pour la Puissance entrer (5): ");
      console.log("Pour le Racine carrée entrer (6): ");
      console.log("Pour le Factorielle entrer (7): ");

      choix = prompt("Opération: ");
    } while (choix < 1 || choix > 7);
    let nombre1;
    let nombre2;
    let resultat;
    switch (choix) {
      case "1":
        nombre1 = +prompt("Entrer le premier nombre: ");
        nombre2 = +prompt("Entrer le deuxieme nombre: ");

        resultat = Addition(nombre1, nombre2);
        console.log(nombre1 + " + " + nombre2 + " = " + resultat);
        tableau.push(nombre1 + " + " + nombre2 + " = " + resultat);
        break;
      case "2":
        nombre1 = +prompt("Entrer le premier nombre: ");
        nombre2 = +prompt("Entrer le deuxieme nombre: ");

        resultat = Soustraction(nombre1, nombre2);
        console.log(nombre1 + " - " + nombre2 + " = " + resultat);
        tableau.push(nombre1 + " - " + nombre2 + " = " + resultat);
        break;
      case "3":
        nombre1 = +prompt("Entrer le premier nombre: ");
        nombre2 = +prompt("Entrer le deuxieme nombre: ");
        resultat = Multiplication(nombre1, nombre2);
        console.log(nombre1 + " - " + nombre2 + " = " + resultat);
        tableau.push(nombre1 + " - " + nombre2 + " = " + resultat);
        break;
      case "4":
        nombre1 = +prompt("Entrer le premier nombre: ");

        nombre2 = +prompt("Entrer le deuxieme nombre: ");
        if (nombre2 == 0) {
          console.log("Impossible de diviser par zéro");
          break;
        } else {
          resultat = Division(nombre1, nombre2);
          console.log(nombre1 + " / " + nombre2 + " = " + resultat);
          tableau.push(nombre1 + " / " + nombre2 + " = " + resultat);
        }
        break;
      case "5":
        nombre1 = +prompt("Entrer le premier nombre: ");
        nombre2 = +prompt("Entrer le deuxieme nombre: ");

        resultat = Puissance(nombre1, nombre2);
        console.log(nombre1 + " ^ " + nombre2 + " = " + resultat);
        tableau.push(nombre1 + " ^ " + nombre2 + " = " + resultat);
        break;
      case "6":
        nombre1 = +prompt("Entrer le premier nombre: ");

        resultat = RacineCarrée(nombre1);
        console.log(nombre1 + " Racine = " + resultat);
        tableau.push(nombre1 + " Racine = " + resultat);
        break;
      case "7":
        nombre1 = +prompt("Entrer le premier nombre: ");

        resultat = Factorielle(nombre1);
        console.log(nombre1 + " ! = " + resultat);
        tableau.push(nombre1 + " ! = " + resultat);
        break;

      default:
        console.log("Entrer un nombre dans la liste (1-7)");
        break;
    }
    repeter = prompt(
      "Voulez vous continuer les calcules ou Quitter? Oui/Non :"
    );
  } while (repeter === "oui");

  let affichage = prompt(
    "Voulez vous afficher l'historique des calculs? Oui/Non :"
  );
  if (affichage === "oui") {
    console.log(tableau);
  }
}

calculer();
