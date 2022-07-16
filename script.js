function carregar() {
let msg = window.document.getElementById('msg')
let img = window.document.getElementById('imagem')
const d = new Date()
const [h,m,s] = [d.getHours(), d.getMinutes(), d.getSeconds()]
msg.innerHTML = `Agora são ${h} hora${(h>1)?"s":""}, ${m} minuto${(m>1)?"s":""} e ${s} segundo${(s>1)?"s":""}!`
if (h >= 6 && h < 12) {
    //Bom dia!
    img.src = "manha.png"
    document.body.style.background = '#8493a9'
} else if (h >= 12 && h < 18) {
    // Boa tarde!
    img.src = "tarde.png"
    document.body.style.background = '#fe9302'
} else {
    // Boa noite!
    img.src = "noite.png"
    document.body.style.background = '#182b4b'
}
}