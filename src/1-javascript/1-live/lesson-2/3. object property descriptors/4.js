'use strict';

const user = {};

Object.defineProperty(user, 'name', {
    value: 'Питер',
    configurable: false,
});

console.log(user.name);

delete user.name;

console.log(user.name);