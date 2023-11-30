const { Person, PersonList } = require('./custom-modules/my-module');

const personList = new PersonList();

personList.addPerson(new Person('John'));
personList.addPerson(new Person("Bob"));
personList.addPerson(new Person("Jane"));

personList.getPeople().forEach(person => {
    console.log(person.sayHello());
    console.log(person.name);
});