// con calcule le nombre de tentatives restantes
// tester function calculTentativesRestantes(nombreTentativesAutorisees, tentativesEffectuees)
/* function calculTentativesRestantes(nMotsOuPhrasesombreTentativesEffectuees){
    let nombreTentativesRestantes = nombreTentativesAutorisees - nombreTentativesEffectuees
    return nombreTentativesRestantes
} */

// DECLENCHEUR DU PROGRAMME : le joueur a 3 tentatives pour saisir exactement "mots" ou "phrases", sinon le jeu ne se lance pas et le programme s'arrête
function choisirMotsouPhrases(nombreTentativesEffectuees, nombreTentativesRestantes){
  let choix = prompt("Voulez vous des mots ou des phrases ?")
  while( choix !== "mots" && choix !== "phrases" && nombreTentativesEffectuees < nombreTentativesAutorisees){
    choix = prompt("Veuillez choisir : mots ou des phrases ?")
    nombreTentativesEffectuees++
   
    nombreTentativesRestantes = nombreTentativesAutorisees - nombreTentativesEffectuees
  }
  return choix
}


// affiche le message à la fin du jeu annoçant le score
function afficherMessageScore(score, listePropositions){
  let scoreMax = listePropositions.length
  if(score >= scoreMax){
    console.log("BRAVO !! Votre score est de : " + score + "/" + scoreMax)
  }
  else {
    console.log("Bien essayé : Votre score est de : " + score + "/" + scoreMax)
  }
}

// Cette fonction est le corps du jeu : elle traite la boucle de saiaie en fonction du choix du joueur 
function jouer(choix, score){
  let listeChoisie = [""]
  if (choix === "mots"){
    listeChoisie = listePropositions[0]
    //console.log(listePropositions[0])
   for(let i=0; i<listeChoisie.length; i++){
    let userWord = prompt("Saisir le mot : " + listeChoisie[i])
      if(userWord === listeChoisie[i]){
      score++
      }
   }
   let messageScore = afficherMessageScore(score, listeChoisie)
    // console.log(messageScore)
    return score
  } 
  if(choix === "phrases"){
    listeChoisie = listePropositions[1]
    //console.log(listeChoisie)
    for(let i=0; i<listeChoisie.length; i++){
      let userPhrase = prompt("Saisir la phrase : " + listeChoisie[i])
      if(userPhrase === listeChoisie[i]){
         score++
         }
    }
    let messageScore = afficherMessageScore(score, listeChoisie)
    // console.log(messageScore)
    return score
  }
}


// la fonction qui lance le jeu en regrouppant toutes les fonctionnalités nécessaires au jeu
function lancerJeu(){
  // initialisations 
  // la variable score contiendra le score du joueur
let score = 0

// Variables de nombres de tentatives effectuées et restantes pour choisir le type de jeu 
let nombreTentativesEffectuees = 0
let nombreTentativesRestantes = nombreTentativesAutorisees

let choix = choisirMotsouPhrases(nombreTentativesEffectuees, nombreTentativesRestantes)
//console.log(choix)
jouer(choix, score)

}