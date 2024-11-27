/**
 * -------------------------------------------------------
 * 1 - Écrire une fonction qui prend 2 paramètres et qui retourne la somme de ces 2 paramètres. Afficher le résultat dans la console.
 * -------------------------------------------------------
 */
function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(1, 2));
/**
 * -------------------------------------------------------
 * 2 - Écrire une fonction qui prend 2 paramètres et qui retourne la somme de :
 *  → la raçine carrée du premier paramètres
 *  → le second paramètre à la puissance 7
 *  Afficher le résultat dans la console.
 * -------------------------------------------------------
 */
function sum2(num1, num2) {
  num1 = Math.sqrt(num1);
  num2 = num2 ** 7;
  return num1 + num2;
}
console.log(sum2(9, 2));

/**
   * -------------------------------------------------------
   * 3 - Créer une fonction qui vérifie si l’utilisateur est apte à apprendre du Javascript : 
    avec prompt, demander successivement à l’utilisateur les deux langages de programmation à apprendre avant de démarrer le JS
    → S’il répond successivement HTML puis CSS, alors la fonction retourne vrai ; sinon faux.
    → Si l’exécution de la fonction retourne vrai, alors la console affiche “Bienvenue en JS jeune éphèbe”
    → Si l’exécution de la fonction retourne faux, alors la console affiche “Solidifie tes acquis : rien n’est impossible à qui rêve, ose, travaille et n’abandonne jamais”
   * -------------------------------------------------------
*/
let language1 = prompt(
  "L'un des langages à apprendres avant d'apprendre le js"
);
let language2 = prompt("L'autre langage à apprendre");
function verif(language1, language2) {
  if (
    (language1 === "HTML" && language2 === "CSS") ||
    (language2 === "HTML" && language1 === "CSS")
  ) {
    return "Bienvenue en JS jeune éphèbe";
  } else {
    return "Solidifie tes acquis : rien n’est impossible à qui rêve, ose, travaille et n’abandonne jamais";
  }
}

console.log(verif(language1, language2));
