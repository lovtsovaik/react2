'use strict';

const array = ['Good morning.', 'Good evening.'];

Object.freeze(array);

array[0] = 8;
