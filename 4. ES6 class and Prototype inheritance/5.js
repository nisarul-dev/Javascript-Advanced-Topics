// Getter and Setter

class Person {
    constructor (name, age) {
        this.name = name; // Property
        this.age = age;
    }

    eat () { // Method
        console.log(`${this.name} is eating.`);
    }

    get getName () {
        return "Name of the person is " + this.name;
    }

    set setName (name) {
        this.name = name;
    }
}

const sakib = new Person("Sakib", 30);

// Using Getter
console.log(sakib.getName);

// Using Setter
sakib.setName = "Sakib Al Hasan";


console.log(sakib.getName);

/*
    Name of the person is Sakib
    Name of the person is Sakib Al Hasan
*/
