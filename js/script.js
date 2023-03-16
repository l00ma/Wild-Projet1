// this part of code is used on stadium pages only
// for openstreetmap section
//
// begin of code
//
// latitude and longitude init for each stadium
const villes = {
    "camp": { "lat": 41.380889, "long": 2.1229284 },
    "bomb": { "lat": 42.380889, "long": 2.1229284 },
    "oldt": { "lat": 43.380889, "long": 2.1229284 },
    "velo": { "lat": 44.380889, "long": 2.1229284 },
};
let macarte = null;
// Map init
function initMap(lat, long) {
    // "myCard" object will be inserted in "map" id in index.html
    myCard = L.map('map').setView([lat, long], 15);
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
//
// back button function used on top bar only
function goBack() {
    window.history.back()
}
const btnBack = document.getElementById("goBack");
btnBack.addEventListener("click", goBack);
// css class swapping when mouse in over a button
function styleOnRight() {
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
btnRight.addEventListener("mouseleave", styleOffLeft);