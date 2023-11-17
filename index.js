// Function to give alert when click submit
function myFunction() {
    alert("Thank You for Joining Us!");
}

// Dark Mode
function ubahMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// Slide Show Methode 1
let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Slider automation
let slideIndex1 = 0;
showSlides1();

function showSlides1() {
    let j;
    let slides1 = document.getElementsByClassName("mySlides");
    let dots1 = document.getElementsByClassName("dot");
    for (j = 0; j < slides1.length; j++) {
        slides1[j].style.display = "none";
    }
    slideIndex1++;
    if (slideIndex1 > slides1.length) { slideIndex1 = 1 }
    for (j = 0; j < dots1.length; j++) {
        dots1[j].className = dots1[j].className.replace(" active", "");
    }
    slides1[slideIndex1 - 1].style.display = "block";
    dots1[slideIndex1 - 1].className += " active";
    setTimeout(showSlides1, 8000); // Change image every 2 seconds
}