var dane = [[7,2,4,2,8],[2,8,1,1,7],[3,8,6,2,4],[2,5,2,9,1],[6,6,5,4,5]];

function pokazDane() {
    document.getElementById("dane").innerHTML = dane;
}

function wykonaj() {
    document.getElementById("rezultat").innerHTML = weak(dane);
}
// Think twice, code once
function weak(dane) {
    var colSum = [], rowSum = [], wynik = [], colMin = [], rowMin = [];
    var j = 0, i = 0, sum, min;
    for (i = 0; i < 5; i++) {
        sum = 0;
        for (j = 0; j < 5; j++) {
            sum += dane[i][j];
        }
        rowSum.push(sum);
    }
    for (i = 0; i < 5; i++) {
        sum = 0;
        for (j = 0; j < 5; j++) {
            sum += dane[j][i];
        }
        colSum.push(sum);
    }
console.log('rowSum', rowSum);
    console.log('colSum', colSum);
    min = Math.min.apply(null, colSum);
    for (i = 0; i < colSum.length; i++) {
        if (colSum[i] == min) {
            console.log('col min found at', colSum.indexOf(min), 'min value: ', min);
            colMin.push(colSum.indexOf(min));
            colSum.splice(colSum.indexOf(min), 1);
            console.log('col left: ', colSum);
        }
    }
    min = Math.min.apply(null, rowSum);
    for (i = 0; i < rowSum.length; i++) {
        if (rowSum[i] == min) {
            console.log('row min found at', colSum.indexOf(min), 'min value: ', min);
            rowMin.push(rowSum.indexOf(min));
            rowSum.splice(rowSum.indexOf(min), 1);
            console.log('row left: ', colSum);
        }
    }
    console.log('post minimum');
    console.log('rowSum', rowSum);
    console.log('colSum', colSum);

    if (colMin.length == 1 && rowMin.length == 1) return [rowMin[0], colMin[0]];
    min = findMax(dane);
    for (i = 0; i < rowMin.length; i++) {
        for (j = 0; j < colMin.length; j++) {
            if (dane[i][j] < min) {
                min = dane[i][j];
                wynik = [i, j];
            }
        }
    }
    console.log('rowMin', rowMin);
    console.log('colMin', colMin);

    return wynik;
}

function findMax(dane) {
    var max = 0, row;
    for (row = 0; row < dane.length; row++)
        if (Math.max.apply(null, dane[row]) > max)
            max = Math.max.apply(null, dane[row]);
    return max;
}