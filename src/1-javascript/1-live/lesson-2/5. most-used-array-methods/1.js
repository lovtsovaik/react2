const array = ['Oscar', 'Walter'];

const thisArg = {
    value: 'this!',
};

// callback
// array.forEach(function (element, index) {
//     console.log(`${index}: ${element}`);
// });

array.forEach(function (element, index, arrayRef) {
    console.log(`${index}:`, element, arrayRef, this);
}, thisArg);