// Static mathod parameters can be the class's own objects

class Person {
    constructor (name, age) {
        this.name = name; // Property
        this.age = age;
    }

    eat () { // Method
        console.log(`${this.name} is eating.`);
    }

    static isSameAge (person1, person2) {
        if(person1.age === person2.age) 
            return `${person1.name} and ${person2.name} are same age.`;
        
        return `${person1.name} and ${person2.name} are not same age.`;
    }
}

const sakib = new Person("Sakib", 30);
const tamim = new Person("Tamim", 33);

// Static Method called after class name insted of Object name
console.log(
    Person.isSameAge(sakib, tamim)
);



/*
    Sakib and Tamim are not same age.
*/
