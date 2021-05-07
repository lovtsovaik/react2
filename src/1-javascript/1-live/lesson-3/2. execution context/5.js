/**
 * Для доступа к объекту из его метода можно использовать ключевое слово this.
 * Значением this является объект перед аксессором-точкой, в контексте которого вызван метод.
 */

'use strict';

const user = {
    name: 'Walter',
    getName() {
        console.log(this.name);
        debugger;
    },
};

user.getName();
