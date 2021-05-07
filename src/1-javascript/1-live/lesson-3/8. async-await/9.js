const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const getUsers = async () => {
    await delay(2000);
    console.log('finished users');
    return [
        {
            name: 'John',
        },
    ];
};

const getCustomers = async () => {
    await delay(2000);
    console.log('finished customers');
    return [
        {
            name: 'Alex',
        },
    ];
};

const getAll = async () => {
    let [users, customers] = await Promise.all([getUsers(), getCustomers()]);
    const data = [...users, ...customers];
    // console.log(data);
    // console.log(data)
    return data;
};
// const getAll = async () => await Promise.all([getUsers(), getCustomers()]);

(async () => {
    console.log(1);
    const data = await getAll();
    console.log(data);
    console.log(2);
})();
