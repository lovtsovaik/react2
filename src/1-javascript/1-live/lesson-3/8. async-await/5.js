const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const getValue = async () => {

    console.log('→ 1');
    await delay(1000);

    console.log('→ 2');
    await delay(3000);

    return 1;
};

const f = async () => {
    console.log('F started');
    const value = await getValue();
    console.log(value);
};

f();
