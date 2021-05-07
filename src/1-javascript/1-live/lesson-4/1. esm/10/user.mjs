export const user = {
    name: 'Walter',
};

console.log('1. user.js', user);

setTimeout(() => {
    console.log('3. user.js', user);
}, 1000);
