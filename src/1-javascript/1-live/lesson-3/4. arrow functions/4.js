const getMessage = message => {
    const prefix1 = '→';
    const prefix2 = '✓';

    const prefix = message === 'morning' ? prefix1 : prefix2;

    return `${prefix} Good ${message}.`;
};

const result = getMessage('morning');

console.log(result);
