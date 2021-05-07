'use strict';

const user = {
    name: 'Питер',
};

console.log(user);

Object.preventExtensions(user);

user.name = 'Уолтер';

console.log(user);
delete user.name;
console.log(user); // ok

// user.job = 'Разработчик'; // TypeError
// console.log(user);
