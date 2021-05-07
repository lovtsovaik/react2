const user = {
    surname: 'Блек',
    // name: 'Питер',
};

Object.defineProperty(user, 'name', {
    value: 'Питер',
});

console.log(user);
console.log(user.name);
