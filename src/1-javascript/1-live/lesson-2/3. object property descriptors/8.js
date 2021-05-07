'use strict';

const user = {
    name: 'Питер',
    properties: {
        job: 'Разработчик',
    },
};

Object.freeze(user);
Object.freeze(user.properties);

user.properties.job = 'Менеджер';

console.log(user.properties.job);
