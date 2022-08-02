/*
Alguns eventos DOM com movimento do mouse:
mouseover; mousemove; mousedown; mouseup; click; mouseout

https://developer.mozilla.org/pt-BR/docs/Web/Events
*/

var a = window.document.getElementById('area')

function clicar() {   
    a.innerText = 'Clicou!'
    a.style.background = '#355764'
}

function entrar() {
    a.innerText = 'Entrou!'
}

function sair() {
    a.innerText = 'Saiu!'
    a.style.background = '#5A8F7B'
}