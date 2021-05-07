'use strict';

const user = {
    name: 'Питер',
};

Object.seal(user);

user.name = 'Уолтер'; // ok

// user.job = 'Разработчик'; // TypeError
// delete user.name; // TypeError
