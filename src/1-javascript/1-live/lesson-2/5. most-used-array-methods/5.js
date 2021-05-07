const numbers = [1, -1, 2, -2, 3];

const status = numbers.some(function(number) {
    return number > 0;
});

console.log(status);
