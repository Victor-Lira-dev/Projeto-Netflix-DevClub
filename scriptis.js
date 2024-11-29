
let botaosom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")
let assistir = document.querySelector(".link-assistir")
let audio = document.querySelector(".audio")
let filmes = document.querySelector(".imagem-carrossel")
let mute = document.querySelector(".botao-mute")

botaosom.addEventListener("click", desligasom)
video.addEventListener("click", ligasom)

function ligasom() {
    video.muted = !video.muted
}
function desligasom() {
    video.muted = !video.muted
}

botao.addEventListener("click", mostrarModal)
modal.addEventListener("click", esconderModal)

function mostrarModal() {
    modal.style.display = "block"
}

function esconderModal() {
    modal.style.display = "none"

}
 
assistir.addEventListener("click", tocarAudio)

function tocarAudio() {
    audio.play()
}


mute.addEventListener("click", mostrarMute)

function mostrarMute() {
    mute.style.display = "block"
}