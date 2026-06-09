let messageBienvenue = "Hello World World !";
console.log(messageBienvenue);

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


setTimeout( () => {console.log("une seconde écoulée"); }, 1000 );

function message() {
  console.log("un message");
}

setTimeout( message, 1000 );


let personnages = [
    {"nom": "David", "age": 42, "taille": 192, "membre": true},
    {"nom": "José", "age": 23, "taille": 165, "membre": false},
    {"nom": "Agnès", "age": 36, "taille": 152, "membre": true}
];

for (let personnage of personnages) {
    console.log("Je m'appelle", personnage.prenom, personnage.nom, "j'ai ", personnage.age , " ans.");
}


let users = [
    {
        "prenom": "René",
        "nom": "LaTaupe",
        "age": 49
    },
    {
        "prenom": "Michel",
        "nom": "Sardou",
        "age": 65
    },
    {
        "prenom": "jean",
        "nom": "Valjean",
        "age": 38
    }
];

const userPlusQuaranteAns = users.filter((user) => user.age >= 40)

console.log(userPlusQuaranteAns)

// .map() parcourt une liste en contrôlant un predicat

let vieux = [];
for (let user of users) {
    if (user.age > 40) {
        vieux.push(user);
        };
    }
console.log(vieux);