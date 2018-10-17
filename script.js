var dane = 1072609;

function pokazDane() {
    document.getElementById("dane").innerHTML = dane;
}

function wykonaj() {
    document.getElementById("rezultat").innerHTML = multi(dane);
}
// Think twice, code once
function multi(liczba) {
    var wynik = 1;
    var liczba = dane.toString();
    for (var i = 0; i < liczba.length; i++) {
        if (liczba[i] == 0) {
        }
        else {
            wynik = wynik * liczba[i];
            console.log(wynik);
        }
    }
    return wynik;
}