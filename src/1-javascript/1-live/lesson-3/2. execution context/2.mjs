/**
 * .mjs — специальное расширение для модульного JavaScript.
 * На данный момент расширение .mjs ещё не набрало большую популярность.
 * В таком файле this — undefined.
 */

// Запуск примера → `node --experimental-modules 2.mjs`
// Обратите внимание что версия Node.js должна быть 12+

'use strict';

console.log(this);

debugger;
