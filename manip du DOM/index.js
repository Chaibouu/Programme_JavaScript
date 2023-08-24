const boite = document.querySelector('.click-event')
let btn1 = document.querySelector('#btn-1');
let btn2 = document.querySelector('#btn-2');
let btn3 = document.querySelector('#btn-3');
let btn4 = document.querySelector('#btn-4');
boite.style.borderRadius= '60px'
btn3.addEventListener('click',()=> {
    document.querySelector('.reponse').style.visibility="visible";
    document.querySelector('.reponse').style.background='green';
} )
btn1.addEventListener('click',()=> {
    document.querySelector('.reponse').style.visibility="visible";
    document.querySelector('.reponse').style.background='red';
} )
btn2.addEventListener('click',()=> {
    document.querySelector('.reponse').style.visibility="visible";
    document.querySelector('.reponse').style.background='red';
} )
btn4.addEventListener('click',()=> {
    document.querySelector('.reponse').style.visibility="visible";
    document.querySelector('.reponse').style.background='red';
} )
//-----------------------------------------------------------------
//Mouse Events
const mousemove = document.querySelector('.mousemove');
window.addEventListener('mousemove',(e)=>{
    mousemove.style.left = e.pageX + 'px';
    mousemove.style.top = e.pageY + 'px'
})


//----------------------------------------------------------------
const keypresss = document.querySelector('.keypress');
const keyy = document.querySelector('#key');
document.addEventListener('keypress',(e)=>{ 
    keyy.textContent = e.key;
    if (e.key === 'r') {
        keypresss.style.background = 'red';
    }
    else if (e.key === 'y') {
        keypresss.style.background = 'yellow';
    }
    else if (e.key === 'g') {
        keypresss.style.background = 'green';
    }
    else if (e.key === 'p') {
        keypresss.style.background = 'pink';
    }
    else if (e.key === 't') {
        keypresss.style.background = 'teal';
    }
    else if (e.key === 'b') {
        keypresss.style.background = 'blue';
    }
    else{
        keypresss.style.background = 'white'
    }
})

//-------------------------------------------------------------
//scroll Events

const navv = document.querySelector('nav');
window.addEventListener('scroll',()=>{
    if (window.scrollY > 120) {
        navv.style.top = 0;
    }
    else{
        navv.style.top = '-50px';
    }
})
//-------------------------------------------------------------
// Form Events
const inputName = document.querySelector('input[type="text"]');
const selecte = document.querySelector('select');
const form = document.querySelector('form');
const cgv = document.querySelector('#cgv')
let speudo;
let language;
inputName.addEventListener('input',(e)=>{
    speudo = e.target.value;
})
selecte.addEventListener('input',(e)=>{
    language = e.target.value;
})
form.addEventListener('submit',(e)=>{
    e.preventDefault();
})