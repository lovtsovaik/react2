const createUser = (name, country) => ({
    id: String(Math.floor(Math.random() * 1000000)),
    name,
    country,
});

const mark = createUser('Mark', 'USA');
const walter = createUser('Walter', 'USA');
const austin = createUser('Austin', 'USA');

console.log(mark);
console.log(walter);
console.log(austin);
