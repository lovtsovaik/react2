const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const getOne = async () => {
    await delay(2000);
    console.log(1);

    return 'hello';
};

const getTwo = async () => {
    await delay(3000);
    console.log(2);

    return 'world';
};

const f = async () => {
    console.log('f started');
    const [first, second] = await Promise.all([getOne(), getTwo()]);

    console.log('f finished');

    console.log(first, second);
};

f();
