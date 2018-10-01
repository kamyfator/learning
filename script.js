var dane = '6:56 p.m.';


function pokazDane() {
    document.getElementById("dane").innerHTML = dane;
}

function wykonaj() {
    document.getElementById("rezultat").innerHTML = timeConverter(dane);
}

function timeConverter(dane) {
    var postFormat;
    if (dane[dane.length - 4] == 'a') {
        if (dane[1] == '2') {
            postFormat = '00' + dane.slice(2);
        } else if (dane[1] == ':') {
            postFormat = '0' + dane;
        } else {
            postFormat = dane;
        } 
    }
    else {
        if (dane[1] == '2') {
            postFormat = dane;
        }
        else if (dane[1] == ':') {
            var hour = dane[0] * 1 + 12;
            postFormat = hour + dane.slice(1);
        } else {
            var hour = dane[0] * 10 + dane[1] * 1 + 12;
            postFormat = hour + dane.slice(2);
        }
    }
    return postFormat.slice(0,5);
}