/**
 * Данный createCounter также возвращает замыкание,
 * однако оно оно связано с LE следующего уровня.
 */

/* Global[[LexicalEnvironment]] = { currentCount: 1 } */
let currentCount = 1;

/* createCounter[[Scope]]: Global[[LexicalEnvironment]] */
function createCounter() {
    /* counter1[[LexicalEnvironment]] = { [Function: anonymous] } */
    /* counter2[[LexicalEnvironment]] = { [Function: anonymous] } */

    throw new Error('error!');

    // ! 1.

    /* anonymous[[Scope]]: createCounter[[LexicalEnvironment]] */
    return function () {
        /* anonymous[[LexicalEnvironment]] = {} */

        // ! 2.
        return currentCount++;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2

console.log(counter2()); // 3
console.log(counter2()); // 4
