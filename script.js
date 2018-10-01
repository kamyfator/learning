var name;
var age;

function pokazDane() {
    document.getElementById("dane").innerHTML = dane;
}

function wykonaj() {
    document.getElementById("rezultat").innerHTML = licznik(dane);
}

function sayHi(name, age) {
    return "Hi. My name is " + name + " and I'm " + age + " years old.";
}