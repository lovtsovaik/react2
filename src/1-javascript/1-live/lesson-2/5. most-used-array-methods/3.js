const numbers = [1, -1, 2, -2, 3];

// predicate
const positiveNumbers = numbers.filter(
    function(number /*, index, arrayRef */) {
        return number > 0;
    } /* thisArg */,
);

console.log(numbers);
console.log(positiveNumbers);
