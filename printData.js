// Afin de mener à bien ce projet, les exo qui suivent permettent de le faire étape par étape.
// exo-1 => faire une branch 'get-title'
// - Accéder et Lister les titres de chaque albums dans la console du navigateur;
// - Afficher cette liste dans votre page HTML (dans la balise 'ul').

const albumsListe = document.querySelector('.album-list');
const listeTitre = document.querySelector('ul');

const listeTitreAlbum = () => {
    data.forEach((album) => {
    listeTitre.insertAdjacentHTML('beforeend', `<li>${album.title}</li>`);
    
    });
};


listeTitreAlbum();

// exo-2 => faire une branch 'get-img'
// - Lister les images de chaque album au format medium
// - Afficher les images et les titres correspondant dans votre page HTML.

const listeImageAlbum = () => {
    data.forEach((images) => {
    albumsListe.insertAdjacentHTML('beforeend', `<img src="${images.album.cover_medium}">`);
    });
};

listeImageAlbum();