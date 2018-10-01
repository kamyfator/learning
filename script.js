var dane = 'bae kocham';


function pokazDane() {
    document.getElementById("dane").innerHTML = dane;
}

function wykonaj() {
    document.getElementById("rezultat").innerHTML = correctSentence(dane);
}

function correctSentence(sentence) {
    if (sentence[sentence.length+1]!=='.') {
        sentence = sentence + '.';
    }
    return sentence[0].toUpperCase() + sentence.slice(1);
}