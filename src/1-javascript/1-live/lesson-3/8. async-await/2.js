const f = async () => {
    return 648;
};

const promise = f();

promise.then(i => {
    console.log(i); // 648
});
