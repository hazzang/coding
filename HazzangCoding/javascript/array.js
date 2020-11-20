'use strict'
//Array

//1. Declaration
const arr1 = new array();
const arr2 = [1, 2];

//2. Index position
const fruits = ('사과', '바나나');
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

//3. Looping over an array
//print all fruits
//a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

//c. forEach
fruits.forEach((fruits) => console.log(fruits));

//4. Addtion, deletion, copy
//push: add an item to the end
fruits.push('딸기', '복숭아');
console.log(fruits);

//pop:remove an item form the end
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the bengging
fruits.unshift('딸기', '참외');
console.log(fruits);

//shift: remove an item from the bengging
fruits.unshift();
fruits.unshift();
console.log(fruits);

//note! shift, unshift are slower than pop, push
//splice: remove an item by index position
fruits.push('a', 'b', 'v');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '사과', '수박');
console.log(fruits);

//combine two arrays
const fruit2 = ('오렌지', '모과');
const newFruits = fruits.concat(fruits);
console.log(newFruits);

//5. Searching
//find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('사과'));

//includes
console.log(fruits.includes('당근'));
console.log(fruits.includes('체리'));


//lastIndexOf
console.clear();
fruits.push('사과');
console.log(fruits.indexOf('사과'));
console.log(fruits.lastIindexOf('사과'));

