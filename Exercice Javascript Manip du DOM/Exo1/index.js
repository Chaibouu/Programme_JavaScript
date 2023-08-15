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
/*  for (let i = 0; i < refrain.length; i++) {        
    const phrases = [... new Set(refrain[i].textContent.split('\n'))];     
    refrain[i].innerHTML='';     
    for (let j = 0; j < phrases.length; j++) {         
        refrain[i].innerHTML+= `${phrases[j]} <br>`;     
    } 
} */
    console.log(refrain[0].textContent);
// 4.
    console.log();
// 5.

