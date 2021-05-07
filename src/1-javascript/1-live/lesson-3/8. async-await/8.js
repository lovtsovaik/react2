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
    const users = await getUsers();
    const customers = await getCustomers();
    const data = [...users, ...customers];
    console.log(data);
};

(async () => {
    console.log(1);
    await getAll();
    console.log(2);
})();
