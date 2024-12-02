/**
 * -------------------------------------------------------
 * 1 - Créer une div :
 * → qui possède un titre de niveau 3 avec un id et du texte
 * → qui possède un paragraphe avec du texte
 * → qui possède un bouton avec une classe et un texte
 *
 * Ajouter cette div à la section "hero-section"
 * -------------------------------------------------------
 */
const div = document.createElement("div");
const h3 = document.createElement("h3");
const p = document.createElement("p");
const btn = document.createElement("button");
let hero = document.getElementById("hero-section");
h3.id = "heade3";
btn.classList.add("un-beau-btn");
btn.innerHTML = "Mon beau bouton";
h3.innerHTML = "Un moyen titre";
p.innerHTML = "du texte";
hero.appendChild(div);
div.appendChild(h3);
div.appendChild(p);
div.appendChild(btn);

console.log(div);

/**
 * -------------------------------------------------------
 * 2 - Écrire une fonction qui créer et retourne un élément HTML "li" avec du texte.
 * Exemple : l'execution de la fonction     createMenuItem("Item 1")       retourne :       <li>Item 1</li>
 * → Créer ainsi 5 puces et les insérer dans la liste à puces "menu"
 * -------------------------------------------------------
 */
function menuItem(item) {
  const li = document.createElement("li");
  li.innerHTML = item;
  return li;
}
const menu = document.getElementById("menu");
menu.appendChild(menuItem("test"));
menu.appendChild(menuItem("test"));
menu.appendChild(menuItem("test"));
menu.appendChild(menuItem("test"));
menu.appendChild(menuItem("test"));

/**
 * -------------------------------------------------------
 * 3 - Créer un second menu (via JS uniquement):
 * → La liste à puces aura pour id "menu2" et comportera 3 éléments
 * -------------------------------------------------------
 */
const menu2 = document.createElement("menu");
menu2.id = "menu2";
document.body.appendChild(menu2);
menu2.appendChild(menuItem("test"));
menu2.appendChild(menuItem("test"));
menu2.appendChild(menuItem("test"));

/**
 * -------------------------------------------------------
 * 4 - Déplacer le premier et le dernier élément de la première liste (menu) dans la seconde liste (menu2)
 * -------------------------------------------------------
 */
const frstEl = menu.firstChild;
const lstEl = menu.lastChild;
frstEl.id = "test50";
lstEl.id = "test100";
menu2.appendChild(frstEl);
menu2.appendChild(lstEl);
console.log(menu);
console.log(menu2);

/**
 * -------------------------------------------------------
 * 5 - Changer le texte des puces qui viennent d'être déplacées
 * -------------------------------------------------------
 */
frstEl.innerHTML = "plus un test";
lstEl.innerHTML = "plus un test non plus ";
/**
 * -------------------------------------------------------
 * 6 - Supprimer le titre de niveau 1 qui n'a rien à faire dans le <head></head> et dont l'id est scandaleux 🤓
 * -------------------------------------------------------
 */
div.removeChild(h3);
// Voici un bout de code : ne pas toucher !
const elementListToCreate = [
  {
    name: "section",
    times: 3,
  },
  {
    name: "div",
    times: 3,
  },
  {
    name: "p",
    times: 1,
  },
  {
    name: "span",
    times: 3,
  },
];
/**
 * -------------------------------------------------------
 * 7 - Créer une boucle qui permet de créer et d'injecter dans le body les éléments du tableau un nombre X de fois.
 * Chaque élément est l'enfant du précédent.
 * Exemple (basé sur le tableau ci-dessus) : il faut créer 3 sections. Chaque section possède 3 div. Chaque div possède 3 paragraphes (avec du texte). Chaque paragraphe possède 3 spans (avec du texte et une classe, la même pour chaque span)
 * -------------------------------------------------------
 */
/*const body = document.body;
for (i = 1; i < elementListToCreate[0].times; i++) {
  const section = document.createElement(elementListToCreate[1].name);
  section.innerHTML = "test";
  section.appendChild(body);
  for (j = 1; j < elementListToCreate[1].times; j++) {
    const div = document.createElement(elementListToCreate[1].name);
    div.innerHTML = "test";
    section.appendChild(div);
    for (k = 1; k < elementListToCreate[2].times; k++) {
      const p = document.createElement(elementListToCreate[2].name);
      p.innerHTML = "test";
      div.appendChild(p);
      for (l = 1; l < elementListToCreate[3].times; l++) {
        const span = document.createElement(elementListToCreate[3].name);
        span.innerHTML = "test";
        p.appendChild(div);
      }
    }
  }
}*/

const body = document.body;

// Boucle pour créer et imbriquer les éléments
for (let i = 0; i < elementListToCreate[0].times; i++) {
  // Créer une section
  const section = document.createElement(elementListToCreate[0].name);
  body.appendChild(section); // Ajouter la section au body

  // Boucle pour créer des div à l'intérieur de chaque section
  for (let j = 0; j < elementListToCreate[1].times; j++) {
    const div = document.createElement(elementListToCreate[1].name);
    section.appendChild(div); // Ajouter la div à la section

    // Boucle pour créer des paragraphes à l'intérieur de chaque div
    for (let k = 0; k < elementListToCreate[2].times; k++) {
      const p = document.createElement(elementListToCreate[2].name);
      div.appendChild(p); // Ajouter le paragraphe à la div

      // Boucle pour créer des spans à l'intérieur de chaque paragraphe
      for (let l = 0; l < elementListToCreate[3].times; l++) {
        const span = document.createElement(elementListToCreate[3].name);
        span.classList.add("span-class"); // Ajouter une classe à chaque span
        p.appendChild(span); // Ajouter le span au paragraphe
      }
    }
  }
}

/**
 * -------------------------------------------------------
 * 8 - Sélectionner tous les spans nouvellement créés. Modifier leur texte via une boucle. Chaque span doit afficher "je suis le span n°X"
 * Exemple :
 * → Le premier span doit afficher "je suis le span n°1"
 * → Le second span doit afficher "je suis le span n°2"
 * → etc... jusqu'au span n°9 🤯
 * -------------------------------------------------------
 */
const spans = document.querySelectorAll("span");

// Boucle pour modifier le texte de chaque span
for (let i = 0; i < spans.length; i++) {
  spans[i].innerText = " je suis le span n° " + (i + 1); // Modifier le texte du span
}

console.log(body);
