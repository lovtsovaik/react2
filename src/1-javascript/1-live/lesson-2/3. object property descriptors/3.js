'use strict';

const user = {};

Object.defineProperty(user, 'name', {
    value: 'Питер',
    writable: false,
});

console.log(user.name);

user.name = 'Alex';

console.log(user.name);
