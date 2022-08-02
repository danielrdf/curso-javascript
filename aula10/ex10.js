var a = window.document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseover', entrar)
a.addEventListener('mouseout', sair)

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