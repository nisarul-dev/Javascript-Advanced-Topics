Person.prototype = {
    eat() {
        console.log(`Person-'${this.name}' is eating.`);
    },
    sleep() {
        console.log(`Person-'${this.name}' is sleeping.`);
    }
}

// A Constructor function
function Person(name, age) {
    //let person = Object.create(Person.prototype);

    this.name = name;
    this.age = age;

    //return person;
}

const p1 = new Person("Nisarul Amin", 23);

p1.eat();

p1.sleep();


/*
    Person-'Nisarul Amin' is eating.
    Person-'Nisarul Amin' is sleeping.
*/
