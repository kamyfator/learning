var dane = [0,0];
var n=3;

function pokazDane() {
    document.getElementById("dane").innerHTML = dane + '   ' + n;
}

function wykonaj() {
    document.getElementById("rezultat").innerHTML = index(dane, n);
}

function index(dane, n) {
    var liczba;
    if(n >= dane.length){
        return -1;
    }
    else {
        liczba = Math.pow (dane[n], n);
        return liczba;    
    }
}