/**
 * Переменные и функции, объявленные на «верхнем» уровне скрипта,
 * то есть не объявлены внутри тела функции называют «глобальными».
 *
 * В окружении браузера глобальные переменные и функции становятся свойствами глобального объекта window.
 * В окружении Node.js глобальные переменные и функции не становятся свойствами глобального объекта global.
 *
 * В любом окружении переменные глобального уровня становятся свойствами специального объекта,
 * который называется Global Lexical Environment.
 */

debugger;
const globalVariable2 = 'morning.';

debugger;

function globalFunction() {
    debugger;
    return `${globalVariable1} ${globalVariable2}`;
}
debugger;

console.log(globalFunction());
console.log(global.globalVariable1);
console.log(global.globalFunction2);

// window, global !== LE
