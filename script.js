var dane = [1, 4, 3, 6, 0, -2, -9, 7, 1];

function pokazDane() {
    document.getElementById("dane").innerHTML = dane;
}

function wykonaj() {
    document.getElementById("rezultat").innerHTML = selection(dane);
}
// Think twice, code once

function selection(dane) {
    var index;
    var rezultat = [];
    for (; dane.length != 0;) {
        rezultat.push(Math.min.apply(null, dane));
        console.log(rezultat);
        index = dane.indexOf(Math.min.apply(null, dane));
        dane.splice(index, 1);
        console.log(dane);
    }
    return rezultat;
}