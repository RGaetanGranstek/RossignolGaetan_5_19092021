// Tableau des produits (objet)
function oursonSelect() {
  fetch("http://localhost:3000/api/teddies")
    .then(function (res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then((value) => {
      addCarte(value);
    })
    .catch(function (err) {
      console.log(err);
      // Une erreur est survenue
    });
}
oursonSelect();
// console.log(oursonSelect());

// Création de ma class d'Ourson en peluche
class ficheOurson {
  constructor(_id, name, price, description, imageUrl, colors, quantity) {
    this._id[0] = _id;
    this.name[0] = name;
    this.price[0] = price;
    this.description[0] = description;
    this.imageUrl[0] = imageUrl;
    this.colors = colors;
    this.quantity[0] = quantity;
  }
}
// console.log(ficheOurson);

// fonction pour créé des cartes de mes produits en page d'accueil
function addCarte(value) {
  //boucle pour chaque iteration d'un produit
  for (ficheOurson of value) {
    //recupère l'élément Ourson dans le HTML pour les cartes
    const carte = document.getElementById("Ourson");
    carte.innerHTML += `
    <div class="col-sm-6 p-3 mb-5 card">
      <a href="./frontend/Pages/produit.html?_id=${ficheOurson._id}">
        <img src="${ficheOurson.imageUrl}" class="img-fluid img-thumbnail p-1" alt="${ficheOurson.name}">
      </a>
      <div class="row card-body">
        <h2 class="col-6 card-title">${ficheOurson.name}</h3>
        <h3 class="col-6 text-right">${ficheOurson.price} euros</h3>
      </div>
      <div class="card-body">
        <p class="card-text text-truncate">${ficheOurson.description}</p>
      </div>
      <a href="./frontend/Pages/produit.html?_id=${ficheOurson._id}" class="btn btn-secondary">Acheter ce produit</a>
    </div>`;
    //recupère l'élément linkOurson dans le nav pour créer des liens vers les produits
    const linkOurson = document.getElementById("linkOurson");
    linkOurson.innerHTML += `
    <a class="dropdown-item text-white" href="./frontend/Pages/produit.html?_id=${ficheOurson._id}">Peluche => ${ficheOurson.name}</a>`;
  }
}
