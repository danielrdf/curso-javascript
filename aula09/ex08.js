/*
Selecionando elementos da árvore DOM de 5 formas:
por Marca
por ID
por Nome
Por Classe
Por Selector
*/

// por Marca (tag)
var p1 = window.document.getElementsByTagName('p')[1] // selecionando o segundo [1]
document.write(p1.innerHTML)

// por ID
var d = window.document.getElementById('msg1')
d.style.background = 'green'

// por Classe
var c = window.document.getElementsByClassName('msg2')[0]
c.innerText = 'Estou aguardando...'

// por Seletor
var q = window.document.querySelector('div.msg2')
q.style.color = 'yellow'