/**
 * Явное указание контекста выполнения для стрелочной функции невозможно.
 */

const getThis1 = () => {
    return this;
};
function getThis2() {
    return this;
}

const user = { name: 'Jenifer' };

console.log(getThis1.call(user));
console.log(getThis2.call(user));

// console.log(getThis1.call(user) === this);
