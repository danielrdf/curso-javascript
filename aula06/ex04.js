var nome = window.prompt('Qual é o seu nome?')
document.write(`Olá, <strong>${nome}</strong>! Seu nome tem ${nome.length} letras.<br>`)
document.write(`${nome} em maiúsculas: ${nome.toUpperCase()}.<br>`)
document.write(`${nome} em minúsculas: ${nome.toLowerCase()}.`)