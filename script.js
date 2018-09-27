var dane = [3, 6, 20, 99, 10, 15];

function pokazDane() {
    document.getElementById("dane").innerHTML = dane;
}

function wykonaj() {
    document.getElementById("rezultat").innerHTML = mediana(dane);
}

function sortNumber(a, b) {
    return a - b;
}

function mediana(tablica) {
    tablica.sort(sortNumber);
    console.log(tablica);
    if (tablica.length % 2 == 0) {
        return ((tablica[tablica.length / 2] + tablica[(tablica.length / 2) - 1]) / 2);
    }
    return tablica[Math.floor(tablica.length / 2)];
}