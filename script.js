var dane = 297;

function pokazDane() {
    document.getElementById("dane").innerHTML = dane;
}

function wykonaj() {
    document.getElementById("rezultat").innerHTML = roman(dane);
}
// Think twice, code once
function roman(liczba) {
    var wynik = '';
    var m;
    var i = 0;
    if (liczba >= 1000) {
        m = Math.floor(liczba / 1000);
        for (i = 0; i < m; i++) {
            wynik += 'M';
        }
        liczba = liczba % 1000;
        console.log(liczba);
    }
    if (liczba >= 900) {
        wynik += 'C';
        wynik += 'M';
        liczba -= 900;
    }
    if (liczba >= 500) {
        wynik += 'D';
        liczba -= 500;
    }
    if (liczba >= 400) {
        wynik += 'C';
        wynik += 'D';
        liczba -= 400;
    }
    m = Math.floor(liczba / 100);
    if (liczba >= 100) {
        for (i = 0; i < m; i++) {
            wynik += 'C';
        }
        liczba = liczba % 100;
        console.log(liczba);
    }
    if (liczba >= 90) {
        wynik += 'X';
        wynik += 'C';
        liczba -= 90;
    }
    if (liczba >= 50) {
        wynik += 'L';
        liczba -= 50;
    }
    if (liczba >= 40) {
        wynik += 'X';
        wynik += 'L';
        liczba -= 40;
    }
    if (liczba >= 10) {
        m = Math.floor(liczba / 10);
        for (i = 0; i < m; i++) {
            wynik += 'X';
        }
        liczba = liczba % 10;
    }
    if (liczba >= 9) {
        wynik += 'I';
        wynik += 'X';
        liczba -= 9;
    }
    if (liczba >= 5) {
        wynik += 'V';
        liczba -= 5;
    }
    if (liczba >= 4) {
        wynik += 'I';
        wynik += 'V';
        liczba -= 4;
    }
    if (liczba >= 1) {
        m = Math.floor(liczba / 1);
        for (i = 0; i < m; i++) {
            wynik += 'I';
            liczba--;
        }
    }
    console.log(liczba);
    return wynik;
}