const numbers = [1, -1, 2, -2, 3];

const status = numbers.every(function(number) {
    return number > 0;
});

console.log(status);
