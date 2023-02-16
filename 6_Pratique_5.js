"use strict"

// Pratique 5

// Le but de cet exercice est de modéliser différents types de véhicules (Moto et voiture)
// Tous les différents types de vehicules héritent de la même classe

// Un véhicule a un nombre de roues
// Il a aussi une quantité d'essence en litres (nombre)
// Et un modèle (string)

// Un vehicule peut démarrer (il affiche "VROUM, [modèle] démarre")
// Il peut avancer en perdant 2 litres d'essence. il affiche "[modèle] avance, il reste [essence] litres"
// Tous les véhicules peuvent klaxonner, en faisant "TUTUT".


// Une voiture a toujours 4 roues
// Quand elle klaxonne, une voiture fait "POUIN".

// Une moto a toujours 2 roues
// Une moto peut faire une roue arrière (la voiture ne peut pas), alors elle affiche "[modèle] fait une roue"


class Vehicule {
    roues;
    essence;
    modele;

    constructor(essence, modele) {

        this.essence = essence;
        this.modele = modele;
    }

    demarre() {
        return "VROUM " + this.modele + " demarre";
    }

    avance() {
        this.essence -= 2;
        return this.modele + " avance, il reste " + this.essence + " litres.";
    }

    klaxonne() {
        return "TUUTUUT!";
    }


}

let lada = new Vehicule(20, "lada");
console.log(lada.demarre());
console.log(lada.avance());
console.log(lada.avance());
console.log(lada.klaxonne());



class Voiture extends Vehicule {

    roues = 4;

    constructor(essence, modele) {
        super();
        this.essence = essence;
        this.modele = modele;
    }

    klaxonne() {
        return 'POUIN';
    }
}


let mercedes = new Voiture(20, 'mercedes');
console.log(mercedes.demarre());
console.log(mercedes.avance());
console.log(mercedes.klaxonne());


class Moto extends Vehicule {

    roues = 2;

    constructor(essence, modele) {
        super();
        this.essence = essence;
        this.modele = modele;
    }

    faitUneRoue() {
        return this.modele + ' fait une roue!';
    }
}

let kawasaki = new Moto(25, 'kawasaki');
console.log(kawasaki.faitUneRoue());
console.log(kawasaki.avance());
console.log(kawasaki.klaxonne());



