const words = ['apple', ['car', 'train', 'rainbow']];

const [, [first, second, third, fourth = 'default']] = words;

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
