let botaoSom = document.querySelector(".botao-som");
let video = document.querySelector("video");
let botao = document.querySelector(".link-info");
let modal = document.querySelector(".modal");
let audio = document.querySelector(".audio");
let assistir = document.querySelector(".link-assistir");

// ligar o Som
assistir.addEventListener("click", ligaSom);

function ligaSom() {
    video.muted = false;
}

// Mostrar o Modal

botao.addEventListener("click", mostrarModal);
modal.addEventListener("click", esconderModal);

function mostrarModal() {
    modal.style.display = "block";
}

function esconderModal() {
    modal.style.display = "none";
}

// Tocar  o  Tundum

window.addEventListener("click", tocarAudio);

function tocarAudio() {
    audio.play();
}