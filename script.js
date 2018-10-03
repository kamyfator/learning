var dane = [1,9,-6,4];

function pokazDane() {
    document.getElementById("dane").innerHTML = dane;
}

function wykonaj() {
    document.getElementById("rezultat").innerHTML = difference(dane);
}

function difference(dane) {
    return Math.max.apply(null, dane) - Math.min.apply(null,dane);
}