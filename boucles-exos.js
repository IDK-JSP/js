/**
 * -------------------------------------------------------
 * 1 - Vous êtes un pilote de F1.
 *
 * Créer une boucle qui permette d'afficher "Tour n°X" sur vos 50 tours de circuits
 *
 * Ex :
 * Tour n°1
 * Tour n°2
 * Tour n°3
 * etc...
 * -------------------------------------------------------
 */
for (i = 1; i < 51; i++) {
  console.log("Tour n°", i);
}

/**
 * -------------------------------------------------------
 * 2 - Vous êtes (encore) un pilote de F1 mais cette fois-ci, vous avez avec vous un copain-pilote avec vous parce que vous avez deux fois plus de tours à faire.
 *
 * Créer une boucle qui affiche tous les tours 🔂
 * Si vous êtes au premier tour, afficher "Zé bartiii, c'est à conducteur 1️⃣ de démarrer"
 * Si vous êtes au tour 25, afficher "Il faut changer de conducteur, c'est à conducteur 2️⃣"
 * Si vous êtes au tour 50, afficher "Il faut changer de conducteur, c'est à conducteur 1️⃣"
 * Si vous êtes au tour 75, afficher "Il faut changer de conducteur, c'est à conducteur 2️⃣"
 * Si vous êtes au tour 100, afficher "C'est fini, bien joué à tous, HIGH FIVE ! 🙌😎"
 * -------------------------------------------------------
 */
for (i = 1; i < 101; i++) {
  if (i == 1) {
    console.log("Zé bartiii, c'est à conducteur 1️⃣ de démarrer");
  } else if (i == 25) {
    console.log("Il faut changer de conducteur, c'est à conducteur 2️⃣");
  } else if (i == 50) {
    console.log("Il faut changer de conducteur, c'est à conducteur 1️⃣");
  } else if (i == 75) {
    console.log("Il faut changer de conducteur, c'est à conducteur 2️⃣");
  } else {
    console.log("Tour n°", i);
  }
}
console.log("C'est fini, bien joué à tous, HIGH FIVE ! 🙌😎");
/**
 * -------------------------------------------------------
 * 3 - Vous êtes (toujours) un pilote de F1, sur 101 tours. Vous devez maintenant faire attention à votre essence.
 *
 * Votre réserve de carburant est de 74L.
 * Chaque tour consomme 7L.
 *
 * Créer une boucle qui affiche tous les tours et le fuel restant à la fin de chaque tour 🔂. Ex : "Tour n°88, Fuel restant : 19"
 * Si vous allez être à court de carburant au prochain tour :
 *    afficher en warning : "Attention carburant à recharger au prochain tour⛽️"
 *    recharger le carburant le tour suivant
 * Une fois le carburant rechargé, afficher en warning : "Le refuel a été fait 🙌😎"
 * Une fois la course terminée, afficher le nombre total de refuel qui aura été nécéssaire. Ex : "Nombre total de refuel :  2"
 * Vous devez obtenir le résultat de la capture d'écran "boucles-basiques-resultat"
 * -------------------------------------------------------
 */
let fuel = 74;
let totalRefuel = 0;
for (i = 1; i <= 101; i++) {
  console.log("Tour n°", i, ", Fuel restant : ", fuel);
  if (fuel == 74 && i > 1) {
    console.warn("Le refuel a été fait 🙌😎");
  }
  fuel = fuel - 7;

  if (fuel <= 7) {
    console.warn("Attention carburant à recharger au prochain tour⛽️");
    fuel = 74;
    totalRefuel++;
  }
}
console.log("Nombre total de refuel :  ", totalRefuel);
