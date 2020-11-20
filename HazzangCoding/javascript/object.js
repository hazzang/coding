'use strict'
//Objects
//one of the JavaScript's data types.
//a collectiojn of related data and/or functionality
//Nearly all objects in JavaScript are instances of object
//object = {key : value};

//1. Literals and proerties

// const obj1 = {};  //'object literal' syntax
// const obj2 = new obj2(); //'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: '20' }
print(ellie);

//with JavaScript magic (dynamically typed language)
//can add properties later
ellie.hasjob = true;
console.log(ellie.hasjob);

//can delete properties later
delete ellie.hasjob;

//2. Computed properties
//key should be always string
console.log(ellie.name);
console.log(ellie['name']);
console.log(ellie.hasjob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');


//3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'oliv', age: 20 };
const person3 = { name: 'suvin', age: 32 };
const person4 = new makePerson('ellie', 20);
console.log(person4);

//4. Constuctor function
function makePerson(name, age) {
    //this = {};
    this.name = name;
    this.age = age;
    //return this!
}

//5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);

//6. for..in vs for..of
//for (key in obj)
for (key in ellie) {
    console.log(key);
}

//for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
    console.log(value);
}

//7. Fun cloning
//Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
console.log(user);

//old way
const user3 = {}
for (key in user) {
    user3[key] = user[key];
}
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

//another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'yellow', size: 'small' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
