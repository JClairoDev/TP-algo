"use strict"

// Pratique 1

// Nous sommes dans le cas d'un manège pour enfant.
// Par sécurité, il ne peut accueuillir que des petits.
// Pour pouvoir entrer dans le manège, le client doit donc avoir 12 ans ou moins et peser moins de 50 kg.
// Décommentez l'intérieur de la fonction et complétez la condition.

let limiteAgeEnfant = 12;
let limitePoidsEnfant = 50;

function evaluerPeutRentrer(ageDuClient, poidsDuClient) {
  if (ageDuClient <= limiteAgeEnfant || poidsDuClient < limitePoidsEnfant) {
    console.log("Vous pouvez monter dans ce manège");
  } else {
    console.log("Vous ne pouvez pas monter dans ce manège");
  }
}

// NE PAS MODIFIER APRES CETTE LIGNE

evaluerPeutRentrer(12, 51);
evaluerPeutRentrer(15, 55);
evaluerPeutRentrer(11, 50);