/**
 * Recréer les données dynamiques de votre page d'accueil youtube (c'est-à-dire les 8 premières vidéos qui s'affichent lorsque vous arrivez sur la plateforme)
 * ON SE MOQUE DE REFAIRE LA PARTIE STATIQUE (sidebar, navbar)
 *
 * Pour cela, vous devrez :
 * → Créer 8 objets (correspondant aux 8 vidéos qui s'affichent sur la page d'accueil)
 * → Pousser ces 8 objets dans un tableau
 * → Faire une boucle sur ce tableau et, pour chaque objet, injecter l'objet dans le HTML
 * → Ajouter un peu de CSS pour ressembler à la page de Youtube
 */
let videos = [];
let body = document.body;
for (j = 0; j < 8; j++) {
  let test = {
    title: "title" + j,
    channel: "channel" + j,
    view: "view" + j,
    date: "date" + j,
  };
  videos.push(test);
}
function createElement(tag) {
  return document.createElement(tag);
}
for (i = 0; i < videos.length; i++) {
  let videos = createElement("div");
  let img = createElement("img");
  let title = createElement("h3");
  let channel = createElement("div");
  let pp = createElement("img");
  let nameChan = createElement("h4");
  let view = createElement("h4");
  let date = createElement("h4");
  videos.classList.add("videos" + (i + 1));
  body.appendChild(videos);
  videos.appendChild(img);
  videos.appendChild(title);
  videos.appendChild(channel);
  channel.appendChild(pp);
  channel.appendChild(nameChan);
  videos.appendChild(view);
  videos.appendChild(date);
  title.innerHTML = "Vidéo n°" + (i + 1);
  body.style.display = "flex";
  body.style.justifyContent = "space-between";
  img.setAttribute("src", "images/minia.png");
}
console.log(body);
