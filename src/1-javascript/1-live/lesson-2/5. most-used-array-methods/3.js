const numbers = [1, -1, 2, -2, 3];

// predicate
const positiveNumbers = numbers.filter(function (number) {
    return number > 0;
});

console.log(numbers);
console.log(positiveNumbers);
