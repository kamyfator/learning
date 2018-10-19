var dane = 3;
var drzewo = [];
function pokazDane() {
    document.getElementById("dane").innerHTML = dane;
}

function wykonaj() {
    budujDrzewo(dane);
    document.getElementById("rezultat").innerHTML = czyIstniejeRekurencja(dane, drzewo[0]);
}
// Think twice, code once
function budujDrzewo() {
    var lisc = {};
    lisc.numer = 1;
    lisc.lewySyn = 2;
    lisc.prawySyn = 3;
    drzewo.push(lisc);
    lisc = {};
    lisc.numer = 2;
    lisc.lewySyn = 4;
    lisc.prawySyn = 5;
    drzewo.push(lisc);
    lisc = {};
    lisc.numer = 3;
    lisc.lewySyn = 6;
    lisc.prawySyn = 7;
    drzewo.push(lisc);
    lisc = {};
    lisc.numer = 4;
    lisc.lewySyn = null;
    lisc.prawySyn = null;
    drzewo.push(lisc);
    lisc = {};
    lisc.numer = 5;
    lisc.lewySyn = null;
    lisc.prawySyn = null;
    drzewo.push(lisc);
    lisc = {};
    lisc.numer = 6;
    lisc.lewySyn = null;
    lisc.prawySyn = null;
    drzewo.push(lisc);
    lisc = {};
    lisc.numer = 7;
    lisc.lewySyn = null;
    lisc.prawySyn = null;
    drzewo.push(lisc);
    console.table(drzewo);
}
function czyIstnieje(num) {
    for (i in drzewo) {
        if (drzewo[i].numer == num) return true;
    }
    return false;
}

function czyIstniejeRekurencja(num, lisc) {
    console.log(lisc);
    if (lisc == null) return false;
    if (lisc.numer == num) return true;
    return czyIstniejeRekurencja(num, getLisc(lisc.lewySyn)) ||
        czyIstniejeRekurencja(num, getLisc(lisc.prawySyn));
}

function getLisc(num) {
    for (i in drzewo) {
        if (drzewo[i].numer == num) return drzewo[i];
    }
    return null;
}