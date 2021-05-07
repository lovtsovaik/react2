/**
 * Вызов функции в качестве метода объекта —
 * это фактическое задание контекста выполнения функции в виде этого-же объекта.
 * И this будет указывать на этот объект.
 */

'use strict';

debugger;

const user = {
    name: 'Oliver',
    getThis() {
        debugger;
        return this;
    },
};

console.log(user.getThis());
