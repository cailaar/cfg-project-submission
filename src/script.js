// //Slideshow 

let myTimeout;

function increaseSlide() {
  clearTimeout(myTimeout);
  showSlides();
}

function decreaseSlide() {
  clearTimeout(myTimeout);
  slideIndex-=2
  showSlides();
}

function displaySlide(n){
  clearTimeout(myTimeout)
  slideIndex = n-1;
  showSlides();
}


let slideIndex = -1;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  slideIndex++;
  if (slideIndex < 0){ slideIndex = slides.length-1}
  if (slideIndex > slides.length-1) {slideIndex = 0}    
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].style.display = "block";  
  dots[slideIndex].className += " active";
  myTimeout = setTimeout(showSlides, 5000); 
}


//form 
function redirect() {
  window.location.href = "form-submission.html";
  return false;
}
