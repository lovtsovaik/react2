/**
 * Второй и последующие аргументы метода call — это аргументы для вызова функции,
 * на которой вызывается метод call.
 */

const user1 = { name: 'Уолтер' };
const user2 = { name: 'Моника' };

function sayName(message, emoji) {
    console.log(`${message} ${this.name}. ${emoji}`);
}

sayName.call(user1, 'Здравствуй, я', '🦅');
sayName.call(user2, 'Привет, я', '🦊');
