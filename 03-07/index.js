const btnClick = document.getElementById("btn-click");
const btnHover = document.getElementById("btn-hover");
const btnDbclick = document.getElementById("btn-dbclick")
const btnMdown = document.getElementById("btn-mdown");
const btnMdup = document.getElementById("btn-mup");

const title = document.getElementById("title")
const corpo = document.getElementById("corpo")

/*
btnClick.addEventListener("click", ()=> {
    alert("Luis deve pra agiota")
});

btnHover.addEventListener("mouseover", ()=> {
    console.log("Seu mouse passou pelo botao");
})

btnHover.addEventListener("mouseover", ()=> {
    title.textContent = 'titulo mudou';
})

btnHover.addEventListener("mouseout", ()=> {
    title.textContent = 'Este titulo vai mudar'
    title.style.color = 'blue'
})

const btn = document.getElementsByClassName('btn');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', ()=> {
        alert('botao da classe clicado')
    })
    
}

const btn2 = document.querySelector('button');

btn2.addEventListener("btn", ()=> {
    alert("Luis deve pra agiota")
});

const btns = document.querySelectorAll('button');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click',()=> {
        title.style.color = 'red'
    })
}
*/

/*
function mensagem() {
    alert("Este evento foi disparado");
}

btnClick.addEventListener('click',mensagem)
btnDbclick.addEventListener('dblclick', mensagem)
btnMdown.addEventListener('mousedown' ,mensagem)
btnMdup.addEventListener('mouseup' ,mensagem)

document.addEventListener('keypress', function(event){
    alert("Tecla pressionada: " + event.key)
})

document.addEventListener('DOMContentLoaded', () =>{
    alert("Página carregada")
})

window.addEventListener('resize', () => {
    alert("A página está sendo redimensionada")
})

window.addEventListener('scroll', () => {
    alert("A página está sendo escrolada")
})
*/

/*
document.addEventListener('click', ()=> {
    const paragrafo = document.createElement('p');
    const div = document.getElementById('container')
    paragrafo.textContent = 'Este paragrafo foi criado com JS'
    div.appendChild(paragrafo)
});


document.addEventListener('keypress', ()=> {
    const paragrafos = document.querySelectorAll('p')
    paragrafos.remove();
})
*/

const form = document.getElementById('formulario')
form.addEventListener('submit', (event)=> {
    event.preventDefault();
    alert('formulario enviado')
})