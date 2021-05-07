// 0. parsing
// 1. declaration
// 2. initialization

// ↓
// ↓
// ↓
// ↓

console.log(1);
printMessage('Доброе утро! 🌻');
console.log(2);

/**
 * Function expression — это функциональное выражение.
 */
const printMessage = function (message) {
    console.log(3);
    console.log(message);
};

console.log(4);
