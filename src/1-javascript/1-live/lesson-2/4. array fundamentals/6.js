'use strict';

const array = ['Good morning.', 'Good evening.'];

console.log(Object.getOwnPropertyDescriptor(array, 0));

Object.defineProperty(array, 0, {
    writable: false,
});

array[0] = 8;
