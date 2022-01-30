const personMethods = {
    eat() {
        console.log(`Person-'${this.name}' is eating.`);
    },
    sleep() {
        console.log(`Person-'${this.name}' is sleeping.`);
    }
}

// A Factory function
function Person(name, age) {
    let person = Object.create(personMethods);
    person.name = name;
    person.age = age;

    return person;
}

const p1 = Person("Nisarul Amin", 23);

p1.eat();

p1.sleep();

/*
    Person-'Nisarul Amin' is eating.
    Person-'Nisarul Amin' is sleeping.
*/
