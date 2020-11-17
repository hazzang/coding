//1. Use strict
//added in ES 
//use this for Valina Javascript.
'use strict';

//2. Variable
//let (added in ES6)


let name = 'hazzang';
console.log(name);
let name = '하짱';
console.log(name);

//var (don't ever use this!)
//var hoisting(move declartion from bottom top)


//3. Contants
//favor immutable data type always for a few RTCIceTransportStateChangedEvent;
//- security 보완
//- thread safety 안전
// reduce human mistakes 실수

const daysInweek = 7;
const maxNumber = 5;

//4. Variable types
//primitive, single item: number, string, boolean, null, undefiend, symbol
//object, box container
//function, first-class fuction

const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt(fairly new, don't use it yet)
const bigInt = 123456789123456789123456789123456789n; //over(-2**53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);


//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greetion}`);
const helloBob = `h1 ${brendan}!`; //template literals (string)
console.log(`value: ` + helloBob + ` type: ` + typeof helloBob);

//boolean
//false: 0, null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unique identifiers for objects
const symboll = Symbol('id');
const symbo12 = Symbol('id');
console.log(symboll === symbo12);
console.log(`value: ${symboll.description}, type: ${typeof symboll}`);

//object, real-life object, data structure
const ellie = {name: 'ellie', age: 20};
ellie.age = 21;


//5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);