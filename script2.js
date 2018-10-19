var dane = 19;
function pokazDane() {
    document.getElementById("dane").innerHTML = dane;
}

function wykonaj() {
    document.getElementById("rezultat").innerHTML = fibonacci(dane);
}
// Think twice, code once
function fibonacci(a) {
    if (a == 1) return 1;
    if (a == 2) return 1;
    return fibonacci(a - 1) + fibonacci(a - 2);
}

