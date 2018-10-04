var dane = [1,2,3,4];

function pokazDane() {
    document.getElementById("dane").innerHTML = dane;
}

function wykonaj() {
    document.getElementById("rezultat").innerHTML = bubble(dane);
}
// Think twice, code once
function swap(dane, a, b) {
    var z;
    z = dane[a];
    dane[a] = dane[b];
    dane[b] = z;
}

function bubble(dane) {
    var i = 0;
    var j = 0;
    var appear = true;
    for (j = 0; j < dane.length; j++) {
        appear = false;
        for (i = 0; i < dane.length; i++) {
            if (dane[i] > dane[i + 1]) {
                swap(dane, i, i + 1);
                console.log(dane);
                appear = true;
            }
        }
        if (!appear) break;
    }
    return dane;
}