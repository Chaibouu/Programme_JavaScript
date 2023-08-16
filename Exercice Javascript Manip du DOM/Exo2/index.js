// 1
    let red = document.querySelectorAll('.red');
    for (let i = 0; i < red.length; i++) {
        red[i].classList.remove('red');
        red[i].classList.add('blue'); 
    }

// 2
    let refrain = document.querySelectorAll('.refrain');
    for (let j = 0; j < refrain.length; j++) {
        refrain[j].style.fontStyle = 'italic';        
    }

// 3
    let blue = document.querySelectorAll('.blue');
     for (let k = 0; k < blue.length; k++) {
        blue[k].style.backgroundColor = '#6495ED';
        blue[k].style.margin='0px';
     }

// 4
    //  Oui j'ai reussi à ne pas laisser d'espace entre lesparagraph