// this part of code is used on stadium pages only
// for openstreetmap section
//
// begin of code
//
// latitude and longitude init for each stadium
const villes = {
    "camp": { "lat": 41.380889, "long": 2.1229284 },
    "bomb": { "lat": -34.6356, "long": -58.3648 },
    "oldt": { "lat": 53.4630366621161, "long": -2.2917199367373855 },
    "velo": { "lat": 43.269530121342875, "long": 5.3954688731098 },
};

let macarte = null;
// Map init
function initMap(lat, long) {
    // "myCard" object will be inserted in "map" id in index.html
    myCard = L.map('map').setView([lat, long], 13);
    // Leaflet have to use tiles from openstreetmap.fr
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        //openstreetmp zoom min and max values
        minZoom: 1,
        maxZoom: 20
    }).addTo(myCard);
    // allows market on map
    let marker = L.marker([lat, long]).addTo(myCard);
}
//
// end of openstreetmap code

//// back button function used on top bar only
window.onpageshow = function () {
    window.scrollTo(0, 0);
};

function goBack() {
    window.history.back()
}
const btnBack = document.getElementById("goBack");
btnBack.addEventListener("click", goBack);

// css class swapping when mouse in over a button getElementsByClassName()
/* function styleOnRight() {
    const element = document.getElementById("rightButton");
    element.classList.replace("buttonRightClass", "buttonLeftClass");
}
function styleOffRight() {
    const element = document.getElementById("rightButton");
    element.classList.replace("buttonLeftClass", "buttonRightClass");
}
function styleOnLeft() {
    const element = document.getElementById("leftButton");
    element.classList.replace("buttonLeftClass", "buttonRightClass");
}
function styleOffLeft() {
    const element = document.getElementById("leftButton");
    element.classList.replace("buttonRightClass", "buttonLeftClass");
}

const btnLeft = document.getElementById("leftButton");
btnLeft.addEventListener("mouseenter", styleOnRight);
btnLeft.addEventListener("mouseleave", styleOffRight);

const btnRight = document.getElementById("rightButton");
btnRight.addEventListener("mouseenter", styleOnLeft);
btnRight.addEventListener("mouseleave", styleOffLeft); */

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}