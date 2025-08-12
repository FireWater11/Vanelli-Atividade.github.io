// const { act } = require("react");

// let prevButton = document.getElementById('prev'); // pegar o id no HTML
// let nextButton = document.getElementById('next'); // pegar o id no HTML
// let container = document.querySelector('.container'); // pegar class no HTML
// let items = document.querySelectorAll('.list .item'); // pegar todas as classes no HTML
// let indicators = document.querySelector('.indicators')
// let dots = document.querySelectorAll('.indicators ul li'); 
// let list = document.querySelector('.list');

// let active = 0;
// let firstPosition = 0;
// let lastPosition = items.length - 1;

// function setSlider() {
//     let itemOld = container.querySelector('.list .item.active'); // pegar a classe ativa
//     if (itemOld) {
//         itemOld.classList.remove('active'); // remover a classe ativa
//     }

//     let dotsOld = indicators.querySelector('ul li.active')
//     if (dotsOld) {
//         dotsOld.classList.remove('active'); // remover a classe ativa dos indicadores
//     }

//     if (dots[active]) {
//         dots[active].classList.add('active'); // adicionar a classe ativa nos indicadores
//     }

//     indicators.querySelector('.number').innerHTML = '0' + (active + 1); // atualizar o número do indicador e concatenar com 0
// }

// nextButton.onclick = () => {
//     list.style.setProperty('--calculation', 1)
//     active = active + 1 > lastPosition ? 0 : active + 1; // se o ativo for maior que o último, volta para 0
//     setSlider();
//     items[active].classList.add('active'); // adicionar a classe ativa ao item atual
// }

// prevButton.onclick = () => {
//     list.style.setProperty('--calculation', -1)
//     active = active - 1 < firstPosition ? lastPosition : active - 1;
//     setSlider();
//     items[active].classList.add('active');
// }


let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = document.querySelectorAll('.list .item');
let indicators = document.querySelector('.indicators');
let dots = document.querySelectorAll('.indicators ul li');
let list = document.querySelector('.list');

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

function setSlider() {
    let itemOld = container.querySelector('.list .item.active');
    if (itemOld) {
        itemOld.classList.remove('active');
    }

    let dotsOld = indicators.querySelector('ul li.active');
    if (dotsOld) {
        dotsOld.classList.remove('active');
    }

    if (dots[active]) {
        dots[active].classList.add('active');
    }

    indicators.querySelector('.number').innerHTML = '0'+ (active + 1);
}

nextButton.onclick = () => {
    list.style.setProperty('--calculation', 1)
    active = active + 1 > lastPosition ? 0 : active + 1;
    setSlider();
    items[active].classList.add('active');
}

prevButton.onclick = () => {
    list.style.setProperty('--calculation', -1)
    active = active - 1 < firstPosition ? lastPosition : active - 1;
    setSlider();
    items[active].classList.add('active');
}