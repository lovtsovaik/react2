const promise = new Promise(function (resolve, reject) {
    console.log('Promise init'); // 1) Promise init

    setTimeout(function () {
        console.log('resolving...'); // 3) resolving...
        resolve('Data....');
    }, 2000);
});

promise
    .then(param => {
        console.log('Step 1 ' + param); // 4) Step 1

        const newData = param + 'updated data.';

        return newData;
    })
    .then(value => {
        console.log('Step 2'); // 5) Step 2
        console.log(value); // 6) 777
    })
    .catch(message => {
        console.log('Something is wrong: ' + message); // 4) Something is wrong: Network Error
    });

console.log('Next step'); // 2) Next step
