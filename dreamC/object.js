'use strict';

//1. Literals and properties
const obj1 = {}; // 괄호를 사용하는 것을 'object literal' syntax
const obj2 = new Object();  // new 오브젝트를 사용하는 것을 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const hazzang1 = { name : 'hazzang', age : 3}; // {}를 이용해 오브젝트를 생성할 수 있다.
print(hazzang1);


//2. Computed properties
console.log(hazzang.name); // 코딩하는 순간 key에 해당하는 값을 받아오고 싶을 때
console.log(hazzang['name']); // 정확하게 값을 모를 때, string type으로 입력해야한다.


function printValue(obj, key) {
    console.log(obj['key']); // 현재는 값이 없기 때문에 []을 사용
}
printValue(hazzang, 'name');


//3. Property value shorthand
const person1 = {name : 'bob', age : 2};
const person2 = {name : 'dave', age : 20};
const person3 = new Person('hy', 10); // 반복적으로 추가되는 데이터를 함수로 만들어 새로운 오브젝트로 사용한다.
console.log(person3);


//4. Constuctor function
function Person(name, age) { // 오브젝트를 생성한 함수의 변수는 대문자로 시작한다.
    this.name = name; 
    this.age = age;
}


//5. In operator - 키가 오브젝트 안에 있는지 확인하는 것
console.log('name' in hazzang1);
console.log('age' in hazzang1);

//6. for..in vs for..of
console.clear();
for(key in hazzang1) {  // hazzang이 가지고 있는 key 들이 블럭을 돌때마다 지역 변수에 할당된다.
    console.log(key);
}

const array = [1, 2, 3, 4, 5]; 
for(value of array){
    console.log(value);
}

