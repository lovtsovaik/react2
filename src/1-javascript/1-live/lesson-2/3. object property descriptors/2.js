const user = {
    name: 'Питер',
    surname: 'Блек',

    sayName() {
        return this.name;
    },
};

Object.defineProperty(user, 'sayName', {
    enumerable: false,
});
Object.defineProperty(user, 'city', {
    value: 'Oslo',
    enumerable: true,
});

// console.log(user.sayName());

console.log(user);

for (const key in user) {
    console.log(key);
}
