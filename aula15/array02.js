let valores = [8, 1, 7, 4, 2, 9]

console.log(valores)

console.log('')

for (var pos = 0; pos < valores.length; pos++) {
    console.log(`[${pos}]: ${valores[pos]}`)
}

console.log('')

for (var pos in valores) {
    console.log(`[${pos}]: ${valores[pos]}`)
}

console.log('')
var p = valores.indexOf(7)
console.log(`O valor 7 está na posição ${p}`)