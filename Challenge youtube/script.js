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
    minia: "images/minia.png",
    title: "title" + j,
    channel: "channel" + j,
    view: "view" + j,
    date: "date" + j,
  };
  videos.push(test);
}
function createElement(i) {
  let video = document.createElement("div");
  let img = document.createElement("img");
  let title = document.createElement("h3");
  let channel = document.createElement("div");
  let view = document.createElement("h4");
  let date = document.createElement("h4");
  body.appendChild(video);
  video.appendChild(img);
  video.appendChild(title);
  video.appendChild(channel);
  video.appendChild(view);
  video.appendChild(date);
  img.setAttribute("src", videos[i].minia);
  title.innerHTML = videos[i].title;
  channel.innerHTML = videos[i].channel;
  view.innerHTML = videos[i].view;
  date.innerHTML = videos[i].date;
}

for (i = 0; i < videos.length; i++) {
  createElement(i);
}
console.log(body);
