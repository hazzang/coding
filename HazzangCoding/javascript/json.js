//JSON
//JavaScript Object Notation

//1. Object to JSON
//stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log('${name} can jump');
    },
}
json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
})


//2. JSON to Object
//parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
}
console.log(obj);
rabbit.jump();
console.log(rabbit.birthDate.getDate());
console.log()


//JSONDiff.com(디버깅시 유용함)
//json Beautifier(깨진 포맷 예쁘게 만들기->beautifier 버튼 누르기)
//json parser(오브젝트 타입으로 보고 싶을 때 -> json parser 버튼 누르기)
//json validator(제이슨이 에러시 쉽게 틀린 곳을 찾을 있다.)











