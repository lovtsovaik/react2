let counter = 1;

console.log('1.', counter);

export function increment() {
    console.log('3.', counter);
    counter += 1;
    console.log('4.', counter);
}

export { counter };
