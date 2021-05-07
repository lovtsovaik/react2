/**
 * Замыкание, или closure — это функция, которая обращается к переменной из внешнего LE.
 *
 * closure = [[LexicalEnvironment]] + [[Scope]]
 *
 * Хорошей стороной замыканий является то, что они позволяют
 * сделать данные приватными, то есть недоступными из внешнего кода напрямую.
 */

function createCounter() {
    /* counter1[[LexicalEnvironment]] = { currentCount: 1, anonymous: [function] } */
    /* counter1[[LexicalEnvironment]] = { currentCount: 2, anonymous: [function] } */
    /* counter1[[LexicalEnvironment]] = { currentCount: 3, anonymous: [function] } */
    /* counter1[[LexicalEnvironment]] = { currentCount: 4, anonymous: [function] } */

    /* counter2[[LexicalEnvironment]] = { currentCount: 1, anonymous: [function] } */
    /* counter2[[LexicalEnvironment]] = { currentCount: 2, anonymous: [function] } */
    let currentCount = 1;

    /* anonymous[[Scope]]: createCounter[[LexicalEnvironment]] */
    return () => {
        /* anonymous[[LexicalEnvironment]] = {} */
        return currentCount++;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3
console.log(counter1()); // 4

console.log(counter2()); // 1
console.log(counter2()); // 2
