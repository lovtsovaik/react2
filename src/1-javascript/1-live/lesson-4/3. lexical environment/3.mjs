/**
 * Приблизительный сценария выполнения данного скрипта:
 *
 * Этап декларации всего скрипта:
 * 1:  Global[[LexicalEnvironment]] = { prefix: undefined, printName: [Function: printName] }
 * Этап инициализации всего скрипта:
 * 1:  Global[[LexicalEnvironment]] = { prefix: '→', printName: [Function: printName] }
 * 2.  Выполнение функции console.log(prefix);
 * 3.  Выполнение функции printName('Oliver');
 *     Этап декларации функции printName:
 *     1.  Global[[LexicalEnvironment]].printName[[LexicalEnvironment]] = { name: 'Oliver', message: undefined }
 *     Этап инициализации функции printName:
 *     1.  Global[[lexicalEnvironment]].printName[[LexicalEnvironment]] = { name: 'Oliver', message: 'Hello! My name is' }
 *     2.  Выполнение функции console.log(`${prefix} ${message} ${name}.`)
 *
 * После выполнения функции printName, её внутренний LE удалится.
 */

const prefix = '→';

function printName(name) {
    debugger;
    var message = 'Hello! My name is';

    console.log(`${prefix} ${message} ${name}.`);
}

console.log(prefix);
printName('Oliver');
