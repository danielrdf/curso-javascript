function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número')
    } else {
        let n = Number(num.value)
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            `${n} x ${c} = ${n * c}`
        }
    }

}