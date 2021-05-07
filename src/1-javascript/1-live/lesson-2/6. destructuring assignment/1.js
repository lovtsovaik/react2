const user = {
    name: 'Walter',
    city: 'Berlin',
    job: 'qa',
};

const { name, city, job = 'developer' } = user;

console.log(name);
console.log(city);
console.log(job);
console.log(user);
