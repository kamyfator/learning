var someAnimal;

class animal{
    constructor(name, sound){
        this.name = name;
        this.sound = sound;
    }
}

function createAnimal(name, sound){
    someAnimal = new animal();
    someAnimal.name = name;
    someAnimal.sound = sound;
}

function makeSmaller(animal){
    animal.name = "little " + animal.name;
    animal.sound = "cute " + animal.sound;
    return animal;
}

function show(){
    document.getElementById('paragraph').innerHTML = "My name is " + someAnimal.name + " and i do " + someAnimal.sound;
}