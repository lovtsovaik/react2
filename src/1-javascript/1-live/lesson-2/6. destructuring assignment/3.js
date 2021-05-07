const user = {
    name: 'Walter',
    city: 'Berlin',
    skills: {
        driving: true,
        programming: true,
    },
};

const {
    city: home,
    skills: { driving: isDriver, programming },
} = user;

console.log(home);
console.log(isDriver);
console.log(programming);
