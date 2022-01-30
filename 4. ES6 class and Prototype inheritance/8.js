// Static mathod's 'this' points to the class. So 'this' is not useful inside static function.

class Person {
    constructor (name, age) {
        this.name = name; // Property
        this.age = age;
    }

    eat () { // Method
        console.log(`${this.name} is eating.`);
    }

    static thisInStatic (person1, person2) {
        return this; // Here this is not pointing to any object, It points to the Person class.
    }
}

const sakib = new Person("Sakib", 30);
const tamim = new Person("Tamim", 33);

// Static Method called after class name insted of Object name
console.log(
    Person.thisInStatic()
);



/*
    [class Person]
*/
