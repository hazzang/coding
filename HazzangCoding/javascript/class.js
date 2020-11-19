'use strict'
//Object-oriendted programming
//class: template
//Object: instance of a class
//JavaScript classes
//- introduced in ES6
//- syntactical sugar over prototype-based inheritance

//1. Class declarationas
class Person {
    //constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }
    //methods
    speak() {
        console.log(`${this.name}: hellow`);
    }
}
const hazzang = new Person('hazzang', '20');
console.log(hazzang.name);
console.log(hazzang.age);
hazzang.speak();

const candy = new Person('candy', '20');
console.log(candy.name);
console.log(candy.age);
candy.speak();


//2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // if(value < 0){
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }

}

const user1 = new User('Steve', 'job', -1);
console.log(user1.age);

