function showSlides() {
  let slideIndex = 0;
  let i;
  const slides = document.getElementsByClassName('mySlides');
  slideIndex++;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  slides[slideIndex].style.display = 'block';
  setTimeout(showSlides, 5000);
}

showSlides();
