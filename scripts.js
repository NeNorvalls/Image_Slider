let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;

  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  const translationValue = -currentIndex * 100 + '%';
  slides.style.transform = 'translateX(' + translationValue + ')';
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

setInterval(nextSlide, 3000); 
