// Static mathod basic: called by Class name

class Person {
    constructor (name, age) {
        this.name = name; // Property
        this.age = age;
    }

    eat () { // Method
        console.log(`${this.name} is eating.`);
    }

    static sayHi () {
        console.log("Hi, I'm static method.");
    }
}

const sakib = new Person("Sakib", 30);

// Static Method called after class name insted of Object name
Person.sayHi();



/*
    Hi, I'm static method.
*/
