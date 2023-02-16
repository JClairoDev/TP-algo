"use strict"

// Pratique 4

// IMPORTANT
// Pour faires les exercices suivants, n'utilisez pas de fonctions du tableau "toute faites", mais faites le travail vous même.

// Inversion de tableau
// Créer une fonction "retourne" qui prend en paramètre un tableau, 
// et qui renvoie un copie de ce tableau dont l'ordre des éléments a été inversé.
// Résultat attendu retourne([2, 9, 0, 4, 7]) => [7, 4, 0, 9, 2]

// Insertion
// Créer une fonction qui permet d'insérer une valeur dans un tableau à la position souhaitée.
// Par exemple :
// insere(["vert", "jaune", "rouge", "noir"], "bleu", 2) => ["vert", "jaune", "bleu", "rouge", "noir"]
// Indice: il ne fat pas chercher à modifier le tableau existant, il faut réaliser un nouveau tableau


function retourne(tableau) {

    let tab = tableau;
    let retourneTab = [];

    for (let i = (tab.length - 1); i >= 0; i--) {
        retourneTab.push(tab[i]);
    }
    return retourneTab;

}

let nouveau = retourne([2, 9, 0, 4, 7]);
console.log(nouveau);

function insere(tableau, valeur, position) {

    let nouveauTableau = [];

    for (let i = 0; i < tableau.length + 1; i++) {
        if (i === position) {
            nouveauTableau[i] = valeur;
        } else if (i > position) {
            nouveauTableau[i] = tableau[i - 1];
        } else {
            nouveauTableau[i] = tableau[i];
        }


    }
    return nouveauTableau;
}

let insereTab = insere(["vert", "jaune", "rouge", "noir"], "bleu", 2);
console.log(insereTab);