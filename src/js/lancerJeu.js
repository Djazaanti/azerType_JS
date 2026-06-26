let zoneProposition = document.getElementById("zoneProposition")


// afficher la proposition du mot ou phrase à taper
function afficherProposition(listePropositions){

  choixMots.addEventListener("click", () => {
    zoneProposition.textContent = listePropositions
  })

  choixPhrases.addEventListener("click", () => {
    zoneProposition.textContent = listePropositions
  })

}

// la fonction qui lance le jeu en regrouppant toutes les fonctionnalités nécessaires au jeu
function lancerJeu(){

// la variable score contiendra le score du joueur
let score = 0

/*
// on écoute le bouton valider en récupérant la valeur saisie par le joueur */
let btnValider = document.getElementById("btnValider")
let inputEcriture = document.getElementById("inputEcriture")
let choixMots = document.getElementById("mots")
let choixPhrases = document.getElementById("phrases")
let i = 0    

  btnValider.addEventListener("click", () => {
    console.log(choixMots.id)
    if (choixMots) {
      afficherProposition(listeMots[i])
    }
    if (choixPhrases) {
      afficherProposition(listePhrases[i])
    }

    i++

  })

} // fin lancerJeu