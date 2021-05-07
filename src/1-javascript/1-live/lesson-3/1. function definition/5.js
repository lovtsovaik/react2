/**
 * Переменные, объявленные внутри тела функции — всегда локальные для её тела (даже var).
 */

function iterate() {
    for (var i = 0; i < 5; i++) {
        // Логика цикла...
    }

    console.log(typeof i);
}

iterate();

console.log(typeof i);
