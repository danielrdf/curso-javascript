function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let res = document.getElementById('res')
  
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        
        if (p <= 0) {
            window.alert('Passo inválido. Considerando passo 1')
            p = 1
        }
        if (i < f) {
            for (let c = i; c <= f; c += p) { // contagem crescente
                res.innerHTML += `${c} \u{25AA} ` // https://unicode.org/emoji/charts/full-emoji-list.html
            }
        } else {
            for (let c = i; c >= f; c -= p) { // contagem decrescente
                res.innerHTML += `${c} \u{25AA} `
            }
        }
        res.innerHTML += `\u{1F6A9}`
    }
}