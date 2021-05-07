const array = [
    {
        id: '123',
        name: 'Oscar',
    },
    {
        id: '456',
        name: 'Walter',
    },
    {
        id: '789',
        name: 'Oliver',
    },
];

const result = array.find(function(user) {
    return user.id === '456';
});

console.log(result);
