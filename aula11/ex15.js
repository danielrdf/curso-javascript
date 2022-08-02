function verNac() {
    var origem = window.document.getElementById('txtpais')
    var res = window.document.getElementById('res')
    var país = String(origem.value)
    res.innerHTML = `<p>Você nasceu em ${país}.</p>`

    if (país == 'Brasil') {
        res.innerHTML += `<p>Você é brasileiro.</p>`
    } else {
        res.innerHTML += `<p>Você é estrangeiro.</p>`
    }
}