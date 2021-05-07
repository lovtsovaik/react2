/**
 * Параметры функции расцениваются как её внутренние переменные.
 * При этом, параметры функции можно перезаписывать.
 */

'use strict';

function printMessage(message) {
    'use strict';

    message = 'Добрый вечер! 🦋';
    console.log(typeof message);
}

printMessage('Доброе утро! 🌻');

console.log(typeof message);
