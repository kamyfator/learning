var dane = (["OO.",
            "XOX",
            "XOX"]);

function pokazDane() {
    document.getElementById("dane").innerHTML = dane;
}

function wykonaj() {
    document.getElementById("rezultat").innerHTML = xo(dane);
}
// Think twice, code once

function xo(dane) {
    var j = 0;
    for (; j < 3; j++) {
        if (dane[0][j] == 'X' && dane[1][j] == 'X' && dane[2][j] == 'X') {
            return 'X';
        }
        else if (dane[0][j] == 'O' && dane[1][j] == 'O' && dane[2][j] == 'O') {
            return 'O';
        }
        else if (dane[j][0] == 'X' && dane[j][1] == 'X' && dane[j][2] == 'X') {
            return 'X';
        }
        else if (dane[j][0] == 'O' && dane[j][1] == 'O' && dane[j][2] == 'O') {
            return 'O';
        }
        else if (dane[0][0] == 'X' && dane[1][1] == 'X' && dane[2][2] == 'X') {
            return 'X';
        }
        else if (dane[0][2] == 'X' && dane[1][1] == 'X' && dane[2][0] == 'X') {
            return 'X';
        }
        else if (dane[0][0] == 'O' && dane[1][1] == 'O' && dane[2][2] == 'O') {
            return 'O';
        }
        else if (dane[0][2] == 'O' && dane[1][1] == 'O' && dane[2][0] == 'O') {
            return 'O';
        }
    }
    return 'D';
}