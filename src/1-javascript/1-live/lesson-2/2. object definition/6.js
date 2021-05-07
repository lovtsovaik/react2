const data = {
    type: 'number',
}; // falsy

console.log(Boolean(data));
console.log(!!data);

console.log(data && data.type);

const title = data && data.type && data.type.title;

console.log(title);
