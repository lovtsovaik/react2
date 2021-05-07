const promise = new Promise(function (resolve, reject) {
    console.log('Promise init'); // 1) Promise init

    setTimeout(function () {
        console.log('resolving...'); // 3) resolving...

        // fetch data...
        const data = [{ age: 21 }, { age: 23 }];

        // resolve(data);
        reject('error');
    }, 2000);
});

promise.then(
    function (value) {
        console.log(value); // 4 1
        console.log('Fulfilled'); // 5 Fulfilled
    },
    function (message) {
        console.log('Rejected: ' + message);
    },
);
console.log('Next step'); // 2) Next step
