/**
 * Для вызова функции в строго определённом контексте нужного объекта
 * существуют методы функций — call, apply и bind.
 *
 * Первый аргумент метода call — контекст,
 * в котором желаемая функция будет выполняться всегда.
 */

const user1 = { name: 'Уолтер' };
const user2 = { name: 'Моника' };

function sayName() {
    console.log(`Привет, я ${this.name}.`);
}

/*          ↓ this ↓ */
sayName.call(user1);
sayName.call(user2);
