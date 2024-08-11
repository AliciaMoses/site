
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("hero-slides");
  document.addEventListener('DOMContentLoaded', function(){
    const continueBtn = document.getElementById('continueBtn');
    continueBtn.addEventListener('click', function(){
        plusSlides(1)
    });
  });
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "grid";  
}

document.addEventListener('DOMContentLoaded', function() {
  const headerText = document.getElementById('headerText');
  const continueBtn = document.getElementById('continueBtn');

  continueBtn.addEventListener('click', function(){
    if (headerText.textContent === 'About'){
      headerText.textContent =  'Site Map';
      continueBtn.textContent = '[ back to about ]';
    } else {
      headerText.textContent = 'About';
      continueBtn.textContent = '[ continue ]';
    }
  });
});