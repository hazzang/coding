'use strict';

//JavaScript is synchronous
//Execute the code block by orger after hoisting
//hoisting: var, function deciaration
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

//Synchronous callback
function printImmidiatly(print) {
    print();
}
printImmidiatly(() => console.log('하연~~'));


//Asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('I love you'), 2000);


//Callback Hell example
class UserStoryage {
    logingUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if(
                (id === 'hazzang' && password === '0000') ||
                (id === 'coding' && password === '0000')
            ){
                onSuccess(id);
            }else {
                onError(new Error('not fount'));
            }

        }, 2000);

    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if(user === 'hazzang') {
                onSuccess({name: 'hazzang', role: 'admin' });
            }else {
                onError(new Error('no success'));
            }
        }, 1000);
    }
}


const UserStoryage = new UserStoryage();
const id = prompt("enter your id");
const password = prompt("enter your password");
UserStoryage.logingUser(
    id, 
    password, 
    (user) => {
        UserStoryage.getRoles(user, 
            usserWithRole => {
                alert(`Hellow: ${usserWithRole.name}, you have a ${usserWithRole.role} role`);
            }, 
            error => {
                console.log(error);
            });
    }, 
    (error) => {
        console.log(error);
    }
);









