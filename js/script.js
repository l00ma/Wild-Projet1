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


//
function ChangeBtnLeft() {
    const element = document.querySelector('.buttonRightClass');
    element.className = 'buttonRightClass:hover';
}

function ChangeBtnRight() {
    const element = document.querySelector('.buttonLeftClass');
    element.className = 'buttonLeftClass:hover';
}

