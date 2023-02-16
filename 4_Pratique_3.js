"use strict"

// Pratique 3

// Complétez la fonction suivante afin qu'elle affiche un message de la manière suivante

// Titre : [titre]
// Object : [corps]

// Attention, si le [titre] est vide, il prend la valeur par défaut "Message sans titre"
// Si le message est urgent, il doit être présenté de la manière suivante :

// !!! URGENT !!!
// Titre : [titre]
// Object : [corps]

function afficheMessage(estUrgent, titre, corps) {

    if (estUrgent === true && titre === "") {
        console.log("!!!URGENT!!!");
        console.log("Titre : Message sans titre");
        console.log("Object : " + corps);
    } else if (titre === "") {
        console.log("Titre : Message sans titre");
        console.log("Object : " + corps);
    } else if (estUrgent === true) {
        console.log("!!!URGENT!!!");
        console.log("Titre : " + titre);
        console.log("Object : " + corps);
    } else {
        console.log("Titre : " + titre);
        console.log("Object : " + corps);
    }

}

// NE PAS MODIFIER APRES CETTE LIGNE

afficheMessage(false, "Salut !", "J'espère que tu vas bien.");
afficheMessage(true, "", "N'oublie pas d'acheter du pain !!!");
afficheMessage(false, "", "Ainsi font\nfont\nfont\nles petites marionnettes");