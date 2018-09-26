var someAnimal;
var someDog;

class animal{
    constructor(name, sound){
        this.name = name;
        this.sound = sound;
    }
}

class dog extends animal{
    constructor(color, name){
        super(name, "woof");
        this.color = color;
    }
}

function createAnimal(name, sound){
    someAnimal = new animal();
    someAnimal.name = name;
    someAnimal.sound = sound;
}

function createDog(name, color){
    someDog = new dog(color, name);
    someDog.name = name;
}

function makeSmaller(animal){
    animal.name = "little " + animal.name;
    animal.sound = "cute " + animal.sound;
    return animal;
}


function show(animal){
    document.getElementById('paragraph').innerHTML = "My name is " + animal.name + " and i do " + animal.sound +
    " and my color is " + animal.color;
}