const array = [1, 4, 3, 2, 7];

console.log(array);

console.log(array.sort());
console.log(
    array.sort((a, b) => {
        return a > b ? 1 : -1;
    }),
);
