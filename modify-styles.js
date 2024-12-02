/**
 * --------------------------------
 * 1 - Via JS, renseigner la valeur des attributs src et alt des balises <img>
 * Toujours via JS, leur fixer une longueur de 100%.
 * --------------------------------
 */
let img = document.querySelector("img");
img.setAttribute("alt", "chepa");
console.log(img.getAttribute("alt"));
img.style.width = "100%";
// Voici un bout de code : ne pas y toucher (vraiment) 🤓
const titleList = ["h1", "h2", "h3", "h4", "h5", "h6"];
/**
 * --------------------------------
 * 2 - Via une boucle (sur le tableau ci-dessus), récupérer toutes les balises titres de la page.
 * → Leur ajouter (à toutes) la classe "title"
 * → Si c'est une balise h1, ajouter en plus la classe "title1"
 * → Si c'est une balise h2, ajouter en plus la classe "title2"
 * → Si c'est une balise h3, ajouter en plus la classe "title3"
 * --------------------------------
 */
let body = document.body;

for (let i = 0; i < titleList.length; i++) {
  let tag = titleList[i];

  let titles = document.querySelectorAll(tag);

  for (let j = 0; j < titles.length; j++) {
    let title = titles[j];

    title.classList.add("title");

    if (tag === "h1") {
      title.classList.add("title1");
    } else if (tag === "h2") {
      title.classList.add("title2");
    } else if (tag === "h3") {
      title.classList.add("title3");
    }
  }
}

/**
 * --------------------------------
 * 3 - Ajouter les classes suivantes à certains éléments HTML (à vous d'analyser lesquels) :
 * → "section2"
 * → "card-container"
 * → "card"
 * --------------------------------
 */
const section2 = document.getElementsByTagName("section");
section2[1].classList.add("section2");
const cardConteiner = document.getElementsByTagName("div");
cardConteiner[0].classList.add("card-container");
for (i = 1; i < cardConteiner.length; i++) {
  cardConteiner[i].classList.add("card");
}

console.log(body);

/**
 * --------------------------------
 * 4 - Via JS :
 * → Changer la couleur de fond de la balise <main></main>
 *
 * Classe "section2" :
 * → Lui ajouter une couleur de fond, un padding et un margin
 * → La passer en flex et en column
 *
 * * Classe "card-container" :
 * → Lui ajouter une bordure, un padding et un margin
 * → La passer en flex et aligner ses éléments enfants selon l'axe horizontal. Il doit y avoir "un peu d'espace entre chaque enfant"
 *
 * Classe "card"
 * → Lui ajouter une bordure, un padding et un margin
 * → La passer en flex et en column
 * → Centrer ses éléments enfants par rapport à l'axe vertical
 *
 * Bien. Vous vous êtes entraînés à manipuler le CSS depuis Javascript.
 * Maintenant que vous êtes bons, sentez-vous libres d'ajouter un peu de CSS directement depuis la feuille CSS de l'exercice.
 * --------------------------------
 */
document.body.style.backgroundColor = "green";
const testSec = document.querySelector(".section2");
testSec.style.backgroundColor = "blue";
testSec.style.padding = "20px";
testSec.style.margin = "20px";
testSec.style.display = "flex";
testSec.style.flexDirection = "row";
const testCardCont = document.querySelector(".card-container");
testCardCont.style.border = "2px solid black";
testCardCont.style.padding = "20px";
testCardCont.style.margin = "20px";
testCardCont.style.display = "flex";
testCardCont.style.flexDirection = "column";
testCardCont.style.gap = "10px";

/**
 *
 * --------------------------------
 * 5 - Retirer la classe "card" du second et du troisième élément possédant cette classe.
 * Ça casse tout n'est-ce pas ? 🤓 En vrai ça passe mais j'aime pas trop.
 * → Remettre la classe "card" sur ces deux éléments
 * --------------------------------
 */
cardConteiner[1].classList.remove("card");
cardConteiner[3].classList.remove("card");
cardConteiner[1].classList.add("card");
cardConteiner[3].classList.add("card");
/**
 * --------------------------------
 * 6 - Via JS, créer une <div> comme celles déjà présentes dans le HTML : avec sa classe, son style et ses éléments enfants.
 * → Injecter cette <div> en tant que 4ème enfant de "card-container"
 * Cool n'est-ce pas ? 🤓
 * --------------------------------
 */
const div = document.createElement("div");
div.classList.add("card");
testCardCont.appendChild(div);
const img2 = document.createElement("img");
div.appendChild(img2);
const h3 = document.createElement("h3");
h3.innerHTML = "Titre 3";
div.appendChild(h3);
const p = document.createElement("p");
p.innerHTML =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto deserunt, in dicta est commodi eligendi, eaque molestiae, nisi esse repudiandae deleniti nulla quaerat tempore neque. Excepturi nostrum dicta illo debitis?";
div.appendChild(p);
const button = document.createElement("button");
button.innerHTML = "Click pour en savoir + 🤓";
div.appendChild(button);
const testCard = document.querySelectorAll(".card");
for (i = 0; i < testCard.length; i++) {
  testCard[i].style.border = "2px solid black";
  testCard[i].style.padding = "20px";
  testCard[i].style.margin = "20px";
  testCard[i].style.display = "flex";
  testCard[i].style.flexDirection = "column";
}
