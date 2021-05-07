/**
 * Свойства-функции называют методами объекта.
 * Существует более новый и лаконичный синтаксис для объявления методов объекта.
 */
const user = {
    getName: () => {
        return 'Питер';
    },
    getJob() {
        return 'Разработчик';
    },
};

console.log(user.getName());
console.log(user.getJob());
