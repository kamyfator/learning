var dane = 6;
function pokazDane() {
    document.getElementById("dane").innerHTML = dane;
}

function wykonaj() {
    document.getElementById("rezultat").innerHTML = rekurencja(dane);
}
// Think twice, code once
function power(wykladnik) {
    var wynik = 1, i;
    if (wykladnik == 0) return 1;
    if (wykladnik == 1) return 2;
    for (i = 1; i <= wykladnik; i++) {
        wynik = wynik * 2;
    }
    return wynik;
}

function rekurencja(wykladnik) {
    if (wykladnik == 0) return 1;
    return rekurencja(wykladnik-1)*2;
}