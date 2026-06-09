let message = "Hello World World !";
console.log(message);

ageUtilisateur = 34;
if (ageUtilisateur >= 18) {
    if (ageUtilisateur > 65) {
        console.log("Vous êtes vieux !");
    } else {
        console.log("Vous êtes adulte !");
    }
} else {
    console.log("Vous êtes mineur !");
}

let compteur = 10;
console.log(compteur);
while (compteur > 0) {
    compteur --;
    console.log(compteur);
}

let prenom = "Thomas";
function direBonjour(prenom) {
    console.log("Bonjour, " + prenom + " !");
}
direBonjour(prenom);

let nombre = 6;
function carreNombre(nombre) {
    nombre *= nombre;
    return nombre;
}
result = carreNombre(nombre);
console.log(result);

const calculSurface = (longueur,largeur) => {
    let surface = longueur * largeur;
    return surface;
}
console.log(calculSurface(13,17));