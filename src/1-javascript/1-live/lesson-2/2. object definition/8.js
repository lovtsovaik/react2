/**
 * С помощью оператора delete можно удалить свойство объекта.
 * Удаление свойства объекта — это тоже мутация.
 */
const user = {
    name: 'Питер',
    job: 'Разработчик',
};

console.log(user);

delete user.job;

console.log(user);
