'use strict';

const user = {
  name: 'Питер'
};

Object.freeze(user);

// user.name = 'Уолтер'; // TypeError: Cannot assign to read only property 'name'
// user.age = 19; // TypeError: Cannot add property age
// delete user.name; // TypeError: Cannot delete property 'name'