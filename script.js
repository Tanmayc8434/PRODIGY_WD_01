let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function showSlide(index) {
  slideIndex = index % totalSlides;

  const slidesContainer = document.querySelector('.slides');
  const offset = -slideIndex * 100;
  slidesContainer.style.transition = 'transform 0.5s ease';
  slidesContainer.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

let autoSlideInterval = setInterval(nextSlide, 4000);

function resetInterval() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(nextSlide, 4000);
}

document.querySelector('.prev').addEventListener('click', function() {
  prevSlide();
  resetInterval();
});

document.querySelector('.next').addEventListener('click', function() {
  nextSlide();
  resetInterval();
});

showSlide(slideIndex);
