var dane = [1,2,1,3,2,5,1];

function pokazDane(){
    document.getElementById("dane").innerHTML = dane;
}

function wykonaj(){
    document.getElementById("rezultat").innerHTML = funkcja(dane);
}

function funkcja(dane){
    var tablica = [];
    for (let item of dane){
        if (!isUnique(dane, item)){
            tablica.push(item);
        }
    }
    return tablica;
}

function isUnique(arr, el) {
    var hasOne = false;
    for (let item of arr) {
        if (item === el) {
            if (hasOne) {
                return false;
            } else {
                hasOne = true;
            }
        }
    }
    return true;
}

