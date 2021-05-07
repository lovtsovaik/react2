/**
 * Метод bind работает почти как call или apply,
 * но вместо фактического вызова функции возвращает её новый экземпляр.
 * В этом новом экземпляре контекст this намертво прибит, и уже никогда не потеряется.
 */

const user1 = { name: 'Уолтер' };
const user2 = { name: 'Моника' };

function sayName(message, emoji) {
    console.log(`${message} ${this.name}. ${emoji}`);
}

const sayUser1Name = sayName.bind(user1, 'Здравствуй, я', '🦅');
const sayUser2Name = sayName.bind(user2, 'Привет, я', '🦊');

sayUser1Name();
sayUser2Name();
