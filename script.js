var dane = 'azazazaz';

function pokazDane() {
    document.getElementById("dane").innerHTML = dane;
}

function wykonaj() {
    document.getElementById("rezultat").innerHTML = licznik(dane);
}

function licznik(data) {
    var max = 1;
    var i = 0;
    var lastLetter = data[0];
    var count = 1;
    if (data == '') {
        return 0;
    }
    for (i = 1; i < data.length; i++) {
        if (data[i] == lastLetter) {
            count++;
            if (count > max) {
                max = count;
            }
        }
        else {
            count = 1;
        }
        lastLetter = data[i];
    }
    return max;
}