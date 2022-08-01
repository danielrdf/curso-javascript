var n1 = 1545.5
console.log(n1)

console.log(n1.toFixed(2)) // com duas casas decimais

console.log(n1.toFixed(2).replace('.', ',')) // trocando o ponto por vírgula

console.log(n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})) // no formato de salário

console.log(n1.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})) 

console.log(n1.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'})) 