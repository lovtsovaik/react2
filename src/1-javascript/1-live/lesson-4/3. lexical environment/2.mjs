/**
 * В объект LE записываются все переменные, объявленные внутри функции, включая её параметры.
 *
 * Важно: объект LE для каждой функции создаётся непосредственно в момент выполнения этой функции.
 * В момент объявления функции объект LE не создаётся.
 *
 * Процесс выполнения тела функции такой-же, как и процесс выполнения глобального скрипта.
 * Причём, по сути, тот самый глобальный объект с глобальными переменными
 * является частным случаем LE для функций.
 */

debugger;

function printName(name) {
    debugger;
    /* В момент выполнения внутри этой функции создастся объект LE */

    /* Этап декларации: printName[[LexicalEnvironment]] = { name: 'Oliver', prefix: undefined } */
    debugger;
    var prefix = 'Hello! My name is';
    debugger;
    /* Этап инициализации: printName[[LexicalEnvironment]] = { name: 'Oliver', prefix: 'Hello! My name is' } */

    console.log(`${prefix} ${name}.`);
}

debugger;
printName('Oliver');
debugger;
printName('Jack');
debugger;
