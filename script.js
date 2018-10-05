var dane = [1,5,2,7];

function pokazDane() {
    document.getElementById("dane").innerHTML = dane;
}

function wykonaj() {
    document.getElementById("rezultat").innerHTML = multiply(dane);
}
// Think twice, code once

function multiply(dane) {
    var suma=0;
    var i=0;
    if (dane.length == 0) return 0;
    for ( ; i < dane.length; i++) {
        //index = dane.indexOf(i);
        console.log(dane[i]);
        if (i % 2 == 0) {
            suma=suma+dane[i];
        }
    }
    return suma * dane[dane.length-1];
}