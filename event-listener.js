/**
 * --------------------------------------------
 * 1 - Au click sur le bouton "Cacher" :
 *
 * → Cacher le paragraphe
 * → Changer le texte du bouton "Cacher" en "Afficher"
 *
 * Si le bouton est cliqué de nouveau :
 *
 * → Le paragraphe s'affiche de nouveau
 * → Changer le texte du bouton "Afficher" en "Cacher"
 * --------------------------------------------
 */
/*let btnHide = document.getElementsByTagName("button")[3];
btnHide.classList.add("test");
function display() {
  const p = document.querySelector("p");
  if (p.style.display === "none") {
    p.style.display = "block";
    btnHide.innerHTML = "Cacher";
  } else {
    p.style.display = "none";
    btnHide.innerHTML = "Afficher";
  }
}
btnHide.addEventListener("click", display);
*/
/**
 * --------------------------------------------
 * 2 - Création d'une calculatrice simple :
 *
 * → Créer 3 champs inputs :
 *   - Le premier et le troisième sont de type number et permettent de saisir un nombre (1 et 2 par exemple)
 *   - Le second est de type texte et permet de saisir un opérateur (+, -, *, /)
 *
 * → Créer un bouton qui déclenche le calcul des 2 inputs par l'opérateur
 *
 * →  Afficher le résultat dans le HTML. Tant qu'il n'y a pas de résultat, afficher un petit texte en attente.
 * --------------------------------------------
 */
// Création des éléments HTML
let number1 = document.createElement("input");
let sign = document.createElement("input");
let number2 = document.createElement("input");
let btnResult = document.createElement("button");
let p = document.createElement("p");

// Initialisation des valeurs et ajout au DOM
btnResult.innerHTML = "Calculer";
p.innerHTML = "En attente de calcul...";
document.body.appendChild(number1);
document.body.appendChild(sign);
document.body.appendChild(number2);
document.body.appendChild(btnResult);
document.body.appendChild(p);

// Définir les types des champs
number1.type = "number";
sign.type = "text";
number2.type = "number";

// Fonction de calcul
function calcule() {
  // Récupérer les valeurs des champs
  let frst = parseFloat(number1.value); // Convertir en nombre
  let scnd = parseFloat(number2.value); // Convertir en nombre
  let operator = sign.value; // Récupérer l'opérateur

  // Calcul en fonction de l'opérateur
  let result;
  switch (operator) {
    case "+":
      result = frst + scnd;
      break;
    case "-":
      result = frst - scnd;
      break;
    case "*":
      result = frst * scnd;
      break;
    case "/":
      result = frst / scnd;
      break;
    default:
      p.innerHTML = "Opérateur non valide.";
      return;
  }

  // Affichage du résultat
  p.innerHTML = "Résultat : " + result;
}

// Ajouter l'événement de clic pour le bouton
btnResult.addEventListener("click", calcule);

/**
 * --------------------------------------------
 * 3 - Créer un container avec 3 div (sans passer par JS, en HTML/CSS classique). Chaque div propose un produit à acheter avec une image, un titre, un petit paragraphe et un bouton "Acheter 🤓"
 *
 * → Attacher un écouteur d'événément de type "click" sur chaque bouton "Acheter 🤓".
 * → Si une div est cliquée, le produit est posusé dans une propriétée "selectedProducts".
 * → Cette propriété est affichée dans le DOM, et pour chaque nouveau produit sélectionné, le DOM est mis à jour.
 *
 * Le pôle Marketing vous demande d'ajouter un bout de code afin de relever l'intérêt des utilisateurs vis-à-vis des produits proposés sur la e-boutique
 * De votre côté, vous imaginez le procédé suivant : "j'écoute le nombre de fois où l'utilisateur passe sa souris sur la div de l'un des produits"
 *
 * → Attacher un écouteur d'événément de type "mouseover" sur chaque div.
 * → Compter le nombre de fois où la souris de l'utilisateur passe sur chaque div. Dès lors que la souris survole une div, mettre à jour le "nombre de fois où la div X a été survolée" dans l'objet utilisateur
 * --------------------------------------------
 */
let compt = 0;
function buy() {}
function selectedProducts(product) {
  if (product.style.border === "2px solid black") {
    product.style.border = "";
  } else {
    product.style.border = "2px solid black";
  }

  return selectedProducts;
}
function survole() {
  compt++;
  return console.log(compt);
}
for (i = 0; i < document.getElementsByTagName("button").length - 3; i++) {
  let current = document.getElementsByTagName("button")[i];
  current.classList.add("btn" + i);
  current.addEventListener("click", buy);
}
for (i = 0; i < document.getElementsByTagName("div").length; i++) {
  let current = document.getElementsByTagName("div")[i];
  current.classList.add("div" + i);
  current.addEventListener("click", function () {
    selectedProducts(current);
  });
}
let div = document.getElementsByTagName("div");
for (let i = 0; i < div.length; i++) {
  div[i].addEventListener("mouseover", function () {
    console.log("toto");
    survole();
  });
}
