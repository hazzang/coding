'use strict'

//Promise is a JavaScript object for asynchronous operation.
//State: pending -> fulfilled or rejected
//Producer vs Consumer

//1. Producer
//When new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    //doing some heavy work (network, read files)
    console.log('doing something......');
    setTimeout(()=> {
        //resolve('ellie');
        reject(new Error('no network'));
    }, 2000);
});

//2. Consumers: then, catch, finally
Promise
.then((value) => {
    console.log(value);
})
.catch(error => {
        console.log(Error);
    })
.finally(() => {
    console.log('finally');
});    

//3. Promise chaining
const fetchNumber = new promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => 2)
.then(num => 3)
.then(num => {
    return new promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    });
})
.then(num => console.log(num));

//4. Error Handling
const getHen = () => 
new Promise((resolve, reject) => {
    setTimeout(() => resolve('a'), 1000);
});
const getEgg = hen =>
new promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => b`), 1000);
});
const cook = egg =>
new promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => c`), 1000);
});

getHen()
.then(hen => getEgg(hen))
.then(egg => cook(egg))
.than(meal => console.log(meal));
