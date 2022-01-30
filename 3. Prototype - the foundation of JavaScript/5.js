class Person {
    // Properties
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Methods
    eat() {
        console.log(`Person-'${this.name}' is eating.`);
    }
    sleep() {
        console.log(`Person-'${this.name}' is sleeping.`);
    }
}

const p1 = new Person("Nisarul Amin", 23);

p1.eat();

p1.sleep();


/*
    Person-'Nisarul Amin' is eating.
    Person-'Nisarul Amin' is sleeping.
*/
