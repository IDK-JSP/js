// Voici un jeu de données : interdiction d'y toucher :)
const characterNames = [
  "63AIS",
  "A'misandra",
  "Amimari",
  "Alika",
  "54B2",
  "A'merpact",
  "Amazora",
];

/**
 * -------------------------------------------------------
 * 1 - Afficher le nombre de personnages dans le tableau
 * -------------------------------------------------------
 */
console.log(characterNames.length);
/**
 * -------------------------------------------------------
 * 2 - Afficher le nom du premier personnage du tableau
 * -------------------------------------------------------
 */
console.log(characterNames[0]);
/**
 * -------------------------------------------------------
 * 3 - Afficher le nom du dernier personnage (le 7eme)
 * -------------------------------------------------------
 */
console.log(characterNames[6]);

/**
 * -------------------------------------------------------
 * 4 - Afficher le nom du dernier personnage **SANS**
 * savoir qu'il est le 7eme
 * -------------------------------------------------------
 */
console.log(characterNames[characterNames.length - 1]);
/**
 * -------------------------------------------------------
 * 5 - Afficher les noms de tous les personnages
 * -------------------------------------------------------
 */
console.log(characterNames);
/**
 * -------------------------------------------------------
 * 6 - Afficher le nom de chaque personnage accompagné du
 * nombre de caractères qu'il contient. Ex: Alika (5)
 * -------------------------------------------------------
 */
characterNames.forEach((name) => {
  console.log(name + "(" + name.length + ")");
});
/**
 * -------------------------------------------------------
 * 7 - Afficher le nom de chaque personnage en minuscules
 * -------------------------------------------------------
 */
characterNames.forEach((name) => {
  console.log(name.toLowerCase());
});
/**
 * -------------------------------------------------------
 * 8 - Afficher le nombre de personnages dont le nom
 * contient la lettre 'a' (minuscule ou majuscule)
 * -------------------------------------------------------
 */
let nbPerso = 0;
console.log("");

for (let i = 0; i < characterNames.length; i++) {
  if (characterNames[i].toLowerCase().includes("a")) {
    nbPerso++;
    console.log(characterNames[i]);
  }
}

console.log(nbPerso);

/**
 * -------------------------------------------------------
 * 9 - Créer une fonction `search(needle)` qui renvoie
 * les personnages dont le nom contient les lettres
 * passées en paramètre.
 *
 * Ex : search('Amim') doit renvoyer 'Amimari'
 * -------------------------------------------------------
 */
function search(letter) {
  let sol = [""];
  for (let i = 0; i < characterNames.length; i++) {
    if (characterNames[i].toLowerCase().includes(letter)) {
      sol.push(characterNames[i]);
    }
  }
  return sol;
}
console.log(search("a"));
