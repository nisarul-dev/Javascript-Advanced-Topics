// Class and Inheritance
class Person {
    // parent Class
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    eat () {
        console.log(`${this.name} is eating.`);
    }
}

class Crickter extends Person {
    // child Class
    constructor (name, age, type, country) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.type = type;
        this.country = country;
    }

    play() {
        console.log(`${this.name} is playing for ${this.country}`);
    }
}

let sakib = new Crickter("Sakib", 30, "All-Rounder", "Bangladesh");

sakib.eat();
sakib.play();

/*
    Sakib is eating.
    Sakib is playing for Bangladesh
*/
