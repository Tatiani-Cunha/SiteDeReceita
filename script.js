// script.js

document.addEventListener('DOMContentLoaded', function() {
  const carouselImages = document.querySelector('.carrossel-imagens');
  const slides = carouselImages.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.carrossel-btn.prev');
  const nextBtn = document.querySelector('.carrossel-btn.next');
  let currentIndex = 0;

  function goToSlide(index) {
    // Garante que o índice esteja dentro dos limites
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    
    carouselImages.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
  }

  prevBtn.addEventListener('click', function() {
    goToSlide(currentIndex - 1);
  });

  nextBtn.addEventListener('click', function() {
    goToSlide(currentIndex + 1);
  });
});
