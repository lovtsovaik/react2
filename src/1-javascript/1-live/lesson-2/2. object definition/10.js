/**
 * Свойства-функции называют методами объекта.
 * Существует более новый и лаконичный синтаксис для объявления методов объекта.
 */
const user = {
    getName: () => 'Питер',
    getJob() {
        return 'Разработчик';
    },
    getAge: function () {
        return 21;
    },
};

console.log(user.getName());
console.log(user.getJob());
console.log(user.getAge());
