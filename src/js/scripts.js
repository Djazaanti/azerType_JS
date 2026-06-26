  // DECLENCHEUR DU PROGRAMME : le joueur a 3 tentatives pour saisir exactement "mots" ou "phrases", sinon le jeu ne se lance pas et le programme s'arrête
  let choixMots = document.getElementById("mots")
  let choixPhrases = document.getElementById("phrases")
  let choix = ""
  
  choixMots.addEventListener("click", function() {
    choix = "mots"
    return choix
  })

  choixPhrases.addEventListener("click", () =>{
    choix = "phrases"
    return choix
  })

// affiche le message à la fin du jeu annoçant le score
function afficherMessageScore(score, listePropositions){
  let scoreMax = listePropositions.length
  let zoneScore = document.querySelector(".zoneScore span")

  if(score >= scoreMax){
    // afficher le message en HTML sous forme score / nbMotsProposés
    let zoneScore = document.querySelector(".zoneScore span")
    zoneScore.textContent = "BRAVO !! Votre score est de : " + score + "/" + scoreMax
   }
   else {
    zoneScore.textContent = "Bien joué : Votre score est de : " + score + "/" + scoreMax
  } 
}