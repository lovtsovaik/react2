/**
 * То есть поиск this для стрелочных функций производится
 * выше в замыкании, так-же, как и поиск переменных.
 */

function defer(func, ms) {
    return function (...rest) {
        setTimeout(() => func.apply(this, rest), ms);
    };
}

function getMessage(message) {
    console.log(message);
}

const getMessageDeferred = defer(getMessage, 2000);

getMessageDeferred('Good morning.');
