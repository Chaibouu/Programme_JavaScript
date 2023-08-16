// Récupere la case "masquer les paroles"
const checkboxParoles = document.querySelector('#masquer-paroles'); // à compléter, ce code ne fonctionne pas
const checkboxRefrains = document.querySelector('#masquer-refrains');
let refrains = document.querySelectorAll('.refrain');
let contenu = document.querySelectorAll('.contenu');
let definition = document.querySelectorAll('.definition');
let paroles = document.querySelector('#paroles');
let bar = document.querySelector('hr');
let labell = document.querySelectorAll('label');
console.log(refrains[1]);
// Récupère le div contenant les paroles
const divParoles = null; //

// Attache une fonction à l'évènement "click" sur checkboxParoles
checkboxParoles.addEventListener('click', function (event) {
  // cette fonction est executée lorsque l'utilisateur clique sur checkboxParoles

  // event.target contient l'élément cliqué (ici checkboxParoles dans notre cas)
  if (event.target.checked) {
    // la case vient d'être cochée
    paroles.classList.add('hidden');
    bar.classList.add('hidden');
    labell[1].lastChild.textContent = 'Afficher les paroles';
  } else {
    // la case vient d'être decochée
    paroles.classList.remove('hidden');
    bar.classList.remove('hidden');
    labell[1].lastChild.textContent = 'Masquer les paroles';
  }
});

checkboxRefrains.addEventListener('click', function (event) {
  
 for (let i = 1; i < refrains.length; i++) {
  if (event.target.checked) {
    // la case vient d'être cochée
    contenu[i].classList.add('hidden');
    definition[i].classList.remove('hidden');
    labell[0].lastChild.textContent = 'Afficher les refrains';
  } else {
    // la case vient d'être decochée
    contenu[i].classList.remove('hidden');
    definition[i].classList.add('hidden');
    labell[0].lastChild.textContent = 'Masquer les refrains';
  }
  
 }
});