/**
 * Метод apply работает почти как call, только в нём немного
 * удобнее делать проброс аргументов вызываемой функции.
 */

const user1 = { name: 'Уолтер' };
const user2 = { name: 'Моника' };

function sayName(message, emoji) {
    console.log(`${message} ${this.name}. ${emoji}`);
}

sayName.apply(user1, ['Здравствуй, я', '🦅']);
sayName.apply(user2, ['Привет, я', '🦊']);
