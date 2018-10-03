var dane = '00:00';


function pokazDane() {
    document.getElementById("dane").innerHTML = dane;
}

function wykonaj() {
    document.getElementById("rezultat").innerHTML = timeConverter(dane);
}

function timeConverter(dane) {
    var postFormat;
    if (dane[0] * 10 + dane[1] * 1 < 12) {
        if(dane[0] * 1 + dane[1] * 1 == 0) {
            postFormat = '12:00';
        }
        else if (dane[0] == '0') {
            postFormat = dane.slice(1,5);
        }
        else {
            postFormat = dane;
        }
        return postFormat + ' a.m.'
    }
    else {
        if (dane[0] * 10 + dane[1] * 1 == 12) {
            postFormat = dane;
        }
        else {
            var hour = dane[0] * 10 + dane[1] * 1 - 12;
            postFormat = hour + ':' + dane.slice(3);
        } 
    }
    return postFormat + ' p.m.';
}