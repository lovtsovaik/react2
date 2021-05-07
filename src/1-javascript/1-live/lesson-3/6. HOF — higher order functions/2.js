/**
 * В теле функции высшего порядка, часто описывают некоторую логику,
 * которая выполнится один раз, при вызове функции высшего порядка.
 *
 * Эту особенность применяют в некоторых полезных приёмах,
 * например — каррировании.
 */

function createLogger() {
    console.log('HOF called once.');
    const prefix = '→';

    return function(message) {
        console.log(`${prefix} ${message}`);
    };
}

const log = createLogger();

log('Good morning.');
log('Good afternoon.');
log('Good evening.');
