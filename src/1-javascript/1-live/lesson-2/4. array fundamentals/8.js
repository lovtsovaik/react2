/**
 * Основной способ конкатенации нескольких массивов —
 * это использование оператора ... (spread).
 */
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array3 = [...array1, array2];

console.log(array1);
console.log(array2);
console.log(array3);

console.log('hello' + ' world');
