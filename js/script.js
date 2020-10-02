"use strict";


//DIALOGBOKS
// Vi har fået inspiration til nedestående del fra https://www.w3schools.com/howto/howto_css_modals.asp

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





//BEREGNING AF STØRRELSE
// Inspiration taget fra undervisningen d. 10/2-2020, hvor vi lavede lignende med BMI beregning

document.getElementById("beregn").addEventListener("click", function () {
    const vurderingsplacering = document.getElementById("vurdering");
    const resultat = document.getElementById("vurdering");

    const vaegt = Number(document.getElementById("vaegt").value);
    const hoejde = Number(document.getElementById("hoejde").value);
    const str = vaegt / (hoejde * hoejde);

    resultat.value = str.toLocaleString("da-DK", {
        maximumFractionDigits: 2
    });

    if (str < 18.5) {
        vurderingsplacering.innerHTML = "Din idelle størrelse er: <p>S</p>";
    } else if (str >= 18.5 && str < 25) {
        vurderingsplacering.innerHTML = "Din idelle størrelse er: <p>M</p>";
    } else if (str >= 25 && str < 30) {
        vurderingsplacering.innerHTML = "Din idelle størrelse er: <p>L</p>";
    }

}, false);






//KROPSTYPE IKONER
//Dette laver kropstyperne klikbare og laver tekstfelt hvor enten 1, 2 eller 3 bliver indtastet alt efter hvad man vælger


document.getElementById("smal").addEventListener("click", function (e) {
    const kropsform = document.getElementById("kropsform");
    kropsform.value = "Kropstype 1"
}, false);

document.getElementById("almindelig").addEventListener("click", function (e) {
    const kropsform = document.getElementById("kropsform");
    kropsform.value = "Kropstype 2"
}, false);

document.getElementById("stor").addEventListener("click", function (e) {
    const kropsform = document.getElementById("kropsform");
    kropsform.value = "Kropstype 3"
}, false);








//COLLAPSIBLE
//Under shop, så man kan trykke på enten beskrivelse, pasform eller levering

var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}







//SLIDESHOW SHOP SIDE
// Inspiration til slideshow fået fra https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
