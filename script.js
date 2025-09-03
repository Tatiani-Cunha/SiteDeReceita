const imagens = document.querySelectorAll('.carrossel-imagens img');
const carrossel = document.querySelector('.carrossel-imagens');
let idx = 0;

document.querySelector('.carrossel-btn.next').onclick = () => {
    idx = (idx + 1) % imagens.length;
    carrossel.style.transform = `translateX(-${idx * 600}px)`;
};

document.querySelector('.carrossel-btn.prev').onclick = () => {
    idx = (idx - 1 + imagens.length) % imagens.length;
    carrossel.style.transform = `translateX(-${idx * 600}px)`;
};
