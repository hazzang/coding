'use strict';

// 배열 표기는 아래와 같이 2가지 방법으로 한다.
const arr1 = new Array();
const arr2 = [1, 2];

const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

// 배열에 있는 값을 모두 불러내는 방법
//1)
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits);
}
//2)
for(let fruit of fruits) {
    console.log(fruit);
}
//3)(callback 함수를 받아 온다.)
fruits.forEach((fruits) => console.log(fruits));

//push는 아이템 추가
fruits.push('melon', 'cherry');
console.log(fruits);
//pop는 맨 뒤쪽 아이템부터 삭제
fruits.pop();
console.log(fruits);

//unshift,shift는 배열 전체가 움직이는 형식으로 느리다는 단점이 있다.
//unshift 앞에 아이템 추가
fruits.unshift('lemon', 'stroberry');
console.log(fruits);
//shift 앞에서 부터 아이템 삭제
fruits.shift();
console.log(fruits);

//splice는 원하는 아이템을 지울 수 있다
fruits.splice(2, 1); // 현재와 같이 입력하면 2번째 과일 하나만 삭제 되지만, 1을 생략하면 2번째부터 모두 지워진다.
console.log(fruits);
fruits.splice(2, 1, 'watermelon');
console.log(fruits);


//Searching
console.log(fruits);
console.log(fruits.indexOf('apple')); // 사과가 몇 번째 있는지 표시
console.log(fruits.includes('apple')); // 포함하고 있는지 true/false로 표시
console.log(fruits.includes('lemon'));
console.log(fruits.lastIndexOf('watermelon'));