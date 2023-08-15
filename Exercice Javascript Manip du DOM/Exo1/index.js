// 1.
    const body = document.body;
    body.firstElementChild.textContent="Rick Astley - Never Gonna Give You Up";
// 2.
    let couplet = document.querySelectorAll('.couplet');
    for (let i = 0; i < couplet.length; i++) {
        couplet[i].firstChild.remove();
        couplet[i].firstChild.remove('br');
    }
// 3.
    const refrain = document.getElementsByClassName('refrain');  
 for (let i = 0; i < refrain.length; i++) {        
    const phrases = [... new Set(refrain[i].textContent.split('\n'))];     
    refrain[i].innerHTML='';     
    for (let j = 0; j < phrases.length; j++) {         
        refrain[i].innerHTML+= `${phrases[j]} <br>`;
    } 
    refrain[i].firstElementChild.remove();
    refrain[i].lastChild.remove();
}

    
// 4.
    let erreur = document.querySelector('#erreur');
    erreur.remove();
    
// 5.
    const footer = document.createElement('footer');
    let p = document.createElement('p');
    p.innerText = '© Copyright 2023 - Chaibouu';
    body.appendChild(footer);
    footer.appendChild(p);

