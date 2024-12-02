/**
 * -------------------------------------------------------
 * 1 - Récupérer (par les 2 méthodes différentes) la section "nos services" :
 * → par son id
 * → par son nom de balise
 * -------------------------------------------------------
 */
const ourServ = document.getElementById("our-services");
const ourServTag = document.getElementsByTagName("section");
console.log(ourServ);

/**
 * -------------------------------------------------------
 * 2 - Récupérer les 2 inputs par leur id
 * → Afficher leur valeur (value) dans la console
 * -------------------------------------------------------
 */
let great = document.getElementById("great").checked;
let notGreat = document.getElementById("not-great").checked;
console.log(great, notGreat);
/**
 * -------------------------------------------------------
 * 3 - Récupérer le titre de niveau 3 de la seconde division de la seconde section
 * → afficher la valeur de son texte dans la console
 * -------------------------------------------------------
 */
let head = document.getElementsByTagName("h3");
console.log(head[1].innerHTML);
/**
 * -------------------------------------------------------
 * 4 - Il est possible de récupérer un élément qui possède plusieurs classes. Récupérer tous les éléments :
 * → qui partagent la classe :   "btn"
 * → qui partagent la classe :   "cta-btn"
 * → qui partagent la classe :   "cta-primary"
 * → qui partagent la classe :   "cta-secondary"
 * → qui partagent les classes : "cta-btn cta-primary"
 * → qui partagent les classes : "btn cta-btn cta-secondary"
 *
 * → Les afficher dans la console
 * → Via JS, compter le nombre de fois où la classe "btn" est présente
 * -------------------------------------------------------
 */
let classBtn = document.getElementsByClassName("btn");
classBtn = classBtn.length;
let allClass = document.querySelectorAll(
  ".btn, .cta-btn, .cta-primary, .cta-secondary, .cta-btn cta-primary, .btn cta-btn cta-secondary"
);
console.log(classBtn);
console.log(allClass);
/**
 * -------------------------------------------------------
 * 5 - Récupérer tous les paragraphes. Via une boucle, les afficher dans la console
 * -------------------------------------------------------
 */
let para = document.getElementsByTagName("p");
for (i = 0; i < para.length; i++) {
  console.log(para[i]);
}
/**
 * -------------------------------------------------------
 * 6 - Récupérer et afficher les éléments suivants dans la console :
 * → le parent direct de la première section
 * → le premier enfant de la première section
 * → le dernier enfant de la première section
 * → le frère précédent de la section "nos services"
 * → le frère suivant de la section "nos services"
 *
 * -------------------------------------------------------
 */
let frstSec = document.getElementsByTagName("section");
console.log(frstSec[0].parentElement);
console.log(frstSec[0].firstElementChild);
console.log(frstSec[0].lastElementChild);
console.log(frstSec[1].previousElementSibling);
console.log(frstSec[1].nextElementSibling);
/**
 * -------------------------------------------------------
 * 7 - Créer une fonction qui permette de compter le nombre de fois "où la balise X apparaît".
 * Compter ensuite le nombre de fois où :
 * la balise HTML h1 apparaît
 * la balise HTML h2 apparaît
 * la balise HTML h3 apparaît
 * la balise HTML p apparaît
 * la balise HTML section apparaît
 * la balise HTML div apparaît
 * → Calculer la somme totale de ces occurences et afficher le résultat dans la console
 * -------------------------------------------------------
 */
function comptTag(balise) {
  balise = document.getElementsByTagName(balise);
  return balise.length;
}
let total =
  comptTag("h1") +
  comptTag("h2") +
  comptTag("h3") +
  comptTag("p") +
  comptTag("section") +
  comptTag("div");
console.log(total);
