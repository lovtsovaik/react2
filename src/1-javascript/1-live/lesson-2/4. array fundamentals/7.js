'use strict';

const array = ['Good morning.', 'Good evening.', ['hello']];

Object.freeze(array);

// array[0] = 8;
array[2][0] = true;

console.log(array);
