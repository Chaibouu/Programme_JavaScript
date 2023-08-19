// console.log(chanson);
// Structure de Chanson:
// - auteur: string
// - titre: string
// - paroles : [Couplet, Couplet, ...]

// Structure de Couplet:
// id : string
// type : string
// chanteur : string
// contenu: tableau contenant les lignes du couplet

// 1.<h1><small>auteur -</small> Titre de la chanson</h1>
    const body = document.body;    
    let titre = document.createElement('h1');
    let auteur = document.createElement('small');
    auteur.textContent = chanson.auteur + ' - ';
    titre.textContent = chanson.titre ;
    titre.prepend(auteur)
    body.prepend(titre);
// 2.
    let div = document.createElement('div');
    div.setAttribute('class','paroles');
    body.append(div);
    
    for (let i = 0; i < chanson.paroles.length; i++) {
        let tableau1 = chanson.paroles[i];
       
    }
   
    
// 3.

// 4.
