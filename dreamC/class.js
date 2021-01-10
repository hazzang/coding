'use strict';

//1. Class는 template으로 name, age 반복 사용되는 항목을 미리 만들어 둔다
class  personInfo{
    primary(name, age) {
        this.name = name;  //name을 입력 받으면 this.name으로 전달한다.
        this.age = age;  //age을 입력 받으면 this.age로 전달한다.
    }

    method() {
        console.log(`${this.name}: hellow`); //콘솔창에 name : hellow로 출력한다.
    }
}

//만들어진 클레스를 오브젝트로 만들어 값을 대입한다.
const hazzang = new personInfo('hazzang', 30); //new personInfo 오브젝트를 hazzang이라는 변수에 대입한다.
console.log(hazzang.name); //변수에 지정된 name이 출력된다.
console.log(hazzang.age); //변수에 지정된 age가 출력된다.
hazzang.method();  //class에 만들어진 method에 hazzang 변수에 대입 된 값을 출력한다.


//2. Getter primary age가 실행 되고, setter는 value 값을 할당 받을 때 실행된다. 
class user{
    prirmary(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age() {
        return this._age;  // 현재 age 값을 return 한다.
    }
    
    set age(value) {
        this._age = value < 0 ? 0 : value;  // value에 할당 받은 값이 0보다 작으면 0을 그렇지 않으면 받은 값을 출력한다.
    }
}

const user1 = new user('steve', 'job', '-1');
console.log(user1.age);


//5. Inheritance
class shape {
    primary(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class ractangle extends shape{} // extends는 shape을 연장해서 ractangle에도 적용한다.
class triangle extends shape{  
    getArea() {
        return (this.width * this.height) / 2;  // 만약 변경 사항이 있다면 식을 다시 지정한다.
    }
}

const Ractangle = new ractangle(20, 20, 'blue');
Ractangle.draw();
console.log(Ractangle.getArea());
const Triangle = new triangle(20, 20, 'yellow');
Triangle.draw();


// Practice
