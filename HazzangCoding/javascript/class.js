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

//3. Fields (public, private)
//Too soon!
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/ 
class Experiment {
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//4. Static properties and methods 
//Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublicsher() {
        console.log(Article.publisher);
    }
}

const article1 = new article1();
const article2 = new article2();
console.log(Article.publisher);
Article.printPublicsher();


//5. Inheritance
//a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    
    draw() {
        console.log('drawing ${this.color} color of')
    }

    getArea() {
        return width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {

    draw() {
        super.draw();
        console.log('^^');
    }

    getArea() {
        return (this.width * this.height) / 2;
    }
}
const Rectangle = new Rectangle(20, 20, 'blue');
Rectangle.draw();

//6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(Triangle instanceof Rectangle);
console.log(Triangle instanceof Triangle);
console.log(Triangle instanceof shape);
console.log(Triangle instanceof object);
console.log(triangle.toString());

