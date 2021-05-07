/**
 * Функцией высшего порядка, или HOF — higher order function можно
 * назвать любую функцию, которая возвращает другую функцию,
 * или принимает другую функцию в качестве параметра,
 * или обладаем обоими вышеописанными критериями.
 */

function createLogger() {
    return function(message) {
        console.log(message);
    };
}

createLogger()('Good morning.');
createLogger()('Good afternoon.');
createLogger()('Good evening.');
