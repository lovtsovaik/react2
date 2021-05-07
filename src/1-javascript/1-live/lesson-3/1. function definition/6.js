/**
 * При этом функция может обращаться к переменным, объявленным снаружи.
 */

const emoji = '🌻';

function printMessage() {
    const message = `Доброе утро! ${emoji}`;

    console.log(message);
}

printMessage();

console.log(typeof message);
