// Prototype Inheritance
function Person(name, age) {
    this.name = name;
    this.age = age;
}

function Crickter(name, age, type, country) {
    Person.call(this);
    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country;
}




Person.prototype = {
    eat: function() {
        console.log(`${this.name} is eating.`);
    },
};

Crickter.prototype = Object.create(Person.prototype);
Crickter.prototype.constructor = Crickter;

Crickter.prototype.play = function() {
    console.log(`${this.name} is playing for ${this.country}`);
}


let sakib = new Crickter("Sakib", 30, "All-Rounder", "Bangladesh");

sakib.eat();
sakib.play();

/*
    Sakib is eating.
    Sakib is playing for Bangladesh
*/
