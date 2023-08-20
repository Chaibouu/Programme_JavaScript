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
        const tab1 = chanson.paroles[i];
        const paragraphe = document.createElement('p');
        for (let j = 0; j < tab1.contenu.length; j++) {
            paragraphe.appendChild(document.createTextNode(tab1.contenu[j]));
            if (j < tab1.contenu.length) {
                paragraphe.appendChild(document.createElement('br'));
            }
            // Une conditions pour ajouter des classes a fin de les afficher ou les masquer
            if(tab1.type === 'verset'){
                paragraphe.setAttribute('class','verset')
            }
            else if(tab1.type === 'choeur'){
                paragraphe.setAttribute('class','choeur')
            }
            else if(tab1.type === 'pont'){
                paragraphe.setAttribute('class','pont')
            }
            else{
                paragraphe.setAttribute('class','outro')
            }
        }
        div.append(paragraph
    }
   
    
// 3.
    const footer = document.createElement('footer');
    let p = document.createElement('p');
    p.textContent='© Copyright 2023 - Codeloccol';
    footer.append(p);
    body.append(footer);

// 4.
    let verset = document.querySelectorAll('.verset');
    let choeur = document.querySelectorAll('.choeur');
    let pont = document.querySelectorAll('.pont');
    let outro = document.querySelectorAll('.outro');
    const boitelabel = document.createElement('div');
    body.prepend(boitelabel);
    let labelparoles = document.createElement('label');
    labelparoles.textContent='Masquer les paroles';
    let labelverset = document.createElement('label');
    labelverset.textContent='Masquer les versets';
    let labelchoeur = document.createElement('label');
    labelchoeur.textContent='Masquer les choeurs';
    let labelpont = document.createElement('label');
    labelpont.textContent='Masquer les ponts';
    let labeloutro = document.createElement('label');
    labeloutro.textContent='Masquer les outros';
    let inputparoles = document.createElement('input');
    inputparoles.id = 'checked';
    inputparoles.type = 'checkbox';
    let inputverset = document.createElement('input');
    inputverset.id = 'checked';
    inputverset.type = 'checkbox';
    let inputchoeur = document.createElement('input');
    inputchoeur.id = 'checked';
    inputchoeur.type = 'checkbox';
    let inputpont = document.createElement('input');
    inputpont.id = 'checked';
    inputpont.type = 'checkbox';
    let inputoutro = document.createElement('input');
    inputoutro.id = 'checked';
    inputoutro.type = 'checkbox';
    labelparoles.appendChild(inputparoles);
    labelverset.appendChild(inputverset);
    labelchoeur.appendChild(inputchoeur);
    labelpont.appendChild(inputpont);
    labeloutro.appendChild(inputoutro);
    boitelabel.appendChild(labelparoles);
    boitelabel.appendChild(labelverset);
    boitelabel.appendChild(labelchoeur);
    boitelabel.appendChild(labelpont);
    boitelabel.appendChild(labeloutro);
    let hr = document.createElement('hr');
    boitelabel.appendChild(hr);
    labelparoles.style.marginRight='20px';
    labelverset.style.marginRight='20px';
    labelchoeur.style.marginRight='20px';
    labelpont.style.marginRight='20px';

    inputparoles.addEventListener('input',(e)=>{
        if(e.target.checked){
            div.style.display='none'
            labelparoles.firstChild.data = 'Afficher les paroles';
        }
        else{
            div.style.display='block';
            labelparoles.firstChild.data = 'Masquer les paroles';
        }
    })
    inputverset.addEventListener('input',(e)=>{
        // for (let i = 0; i < verset.length; i++) {
        //     console.log(verset[i]);
        //     if(e.target.checked){
        //       verset[i].classList.add('hidden')
                
        //     }
            
        // }
        if (e.target.checked) {
            verset.forEach(element =>{
                // element.classList.add('hidden')
                element.style.display = 'none';
            })
        }
        else{
            verset.forEach(element =>{
                // element.classList.add('hidden')
                element.style.display = 'block';
            })
        }
    })
    inputchoeur.addEventListener('input',(e)=>{
        if (e.target.checked) {
            choeur.forEach(element =>{
                element.style.display = 'none';
            })
        }
        else{
            choeur.forEach(element =>{
                element.style.display = 'block';
            })
        }
    })
    inputpont.addEventListener('input',(e)=>{
        if (e.target.checked) {
            pont.forEach(element =>{
                element.style.display = 'none';
            })
        }
        else{
            pont.forEach(element =>{
                element.style.display = 'block';
            })
        }
    })
    inputoutro.addEventListener('input',(e)=>{
        if (e.target.checked) {
            outro.forEach(element =>{
                element.style.display = 'none';
            })
        }
        else{
            outro.forEach(element =>{
                element.style.display = 'block';
            })
        }
    })