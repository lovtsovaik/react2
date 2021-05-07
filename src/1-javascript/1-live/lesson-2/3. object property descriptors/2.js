const user = {
    name: 'Питер',
    sayName() {
        return this.name;
    },
};

Object.defineProperty(user, 'sayName', {
    enumerable: false,
});

for (const key in user) {
    console.log(key);
}
