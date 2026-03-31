let scoreActuelUser = 0;
let scoreActuelOrdi = 0;
const scoreAffichageUser = document.getElementById("score-joueur");
const scoreAffichageOrdi = document.getElementById("score-ordi");

const boutonTourSuiv = document.getElementById("next")
// utilisateur
const pierre = document.getElementById("pierre")
const feuille = document.getElementById("feuille")
const ciseau = document.getElementById("ciseaux")
//ordi
const ordiPierre = document.getElementById("opierre")
const ordiFeuille = document.getElementById("ofeuille")
const ordiCiseau = document.getElementById("ociseaux")

function gagnerPointUser() {
    scoreActuelUser++; // On change la donnée
    scoreAffichageUser.innerText = scoreActuelUser; // On met à jour l'image
}
function gagnerPointOrdi() {
    scoreActuelOrdi++; // On change la donnée
    scoreAffichageOrdi.innerText = scoreActuelOrdi; // On met à jour l'image
}

const choix = ["pierre", "feuille", "ciseau"]
let choixUser
let choixOrdi

function ordiChoix() {
    choixOrdi = choix[Math.floor(Math.random() * choix.length)]
    // Un objet qui lie le texte du choix à l'élément HTML correspondant
    const elementsOrdi = {
        "pierre": ordiPierre,
        "feuille": ordiFeuille,
        "ciseau": ordiCiseau
    };
    // 1. On éteint tout le monde (pour éviter que deux boutons soient oranges en même temps)
    Object.values(elementsOrdi).forEach(el => el.classList.remove('bg-orange-500', 'grayscale-0'));
    Object.values(elementsOrdi).forEach(el => el.classList.add('grayscale'));

    // 2. On allume seulement le bon
    const elementGagnant = elementsOrdi[choixOrdi];
    elementGagnant.classList.add('bg-orange-500');
    elementGagnant.classList.remove('grayscale'); // Optionnel : pour remettre l'image en couleur
    // alert(choixOrdi)
    return choixOrdi
}
// fonction de la logique du jeu
function quiGagne() {
    if (choixOrdi == choixUser) {
        // alert ("match nul")
    } else if (choixOrdi === "pierre" && choixUser === "feuille") {
        // alert("victoire")
        gagnerPointUser()
    } else if (choixOrdi === "pierre" && choixUser === "ciseau") {
        // alert("defaite")
        gagnerPointOrdi()
    } else if (choixOrdi === "feuille" && choixUser === "pierre") {
        // alert("defaite")
        gagnerPointOrdi()
    } else if (choixOrdi === "feuille" && choixUser === "ciseau") {
        // alert("victoire")
        gagnerPointUser()
    } else if (choixOrdi === "ciseau" && choixUser === "feuille") {
        // alert("defaite")
        gagnerPointOrdi()
    }
    else if (choixOrdi === "ciseau" && choixUser === "pierre") {
        // alert("victoire")
        gagnerPointUser()
    }
}

pierre.addEventListener("click", () => {
    choixUser = "pierre"
    ordiChoix()
    quiGagne()

})
feuille.addEventListener("click", () => {
    choixUser = "feuille"
    ordiChoix()
    quiGagne()

})
ciseau.addEventListener("click", () => {
    choixUser = "ciseau"
    ordiChoix()
    quiGagne()
})
boutonTourSuiv.addEventListener("click", () => {
    scoreActuelUser = 0;
    scoreActuelOrdi = 0;
    scoreAffichageUser.innerText = scoreActuelUser;
    scoreAffichageOrdi.innerText = scoreActuelOrdi;

})

