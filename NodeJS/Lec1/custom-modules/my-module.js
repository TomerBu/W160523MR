class Person {
    //props:
    name;

    constructor(name) {
        this.name = name;
    }

    sayHello() {
        return `Hello, My name is: ${this.name}`
    }
}

class PersonList {
    // properties:
    people;

    // constructor:
    constructor() {
        this.people = [];
    }

    //methods:
    addPerson(person) {
        this.people.push(person);
    }

    getPeople() {
        return this.people;
    }
}

const foo = 'bar';
module.exports = { Person, PersonList, foo };