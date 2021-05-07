/**
 * Если в строгом режиме вызов функции произведён вне контекста объекта,
 * this будет равен undefined.
 */

'use strict';

debugger;

function getThis() {
    debugger;

    return this;
}

console.log(this);
console.log(getThis());
