'use strick'

//Callback Hell example
class UserStoryage {
    logingUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'hazzang' && password === '0000') ||
                    (id === 'coding' && password === '0000')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('no success'));
                }
            }, 2000);
        })
    }
    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'hazzang') {
                    reslove({ name: 'hazzang', role: 'admin' });
                } else {
                    reject(new Error('not found'));
                }
            }, 1000);

        });

    }

}

const UserStoryage = new UserStoryage();
const id = prompt('enter your id');
const password = prompt('enter your password');
UserStoryage.logingUser(id, password)
.then(UserStoryage.getRoles)
.then(user => alert(`Hello ${user.name}, ${user.role}`));
.catch(console.log);
