// 0) pending
const promise = new Promise(function (resolve, reject) {
    console.log('Promise'); // 1) Promise

    // работа....

    resolve();
    console.log('Finish'); // 3) Resolved
});

promise.then(function () {
    console.log('Resolved'); // 3) Resolved
});
