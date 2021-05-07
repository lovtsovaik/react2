const array = [1, 2, 3];

console.log(array);

array.push(4); // add end
// array.pop(); // remove last
// array.unshift(4); // add to start
// array.shift(); // remove first

console.log(array);

const newArray = [...array, 4];
const newArray1 = newArray.slice(0, newArray.length - 1);
console.log(newArray);
console.log(newArray1);
