/**
 * Аксессор «квадратные скобки» позволяет получить более гибкий доступ к свойствам.
 */
const key = 'name';

const user = {
    name: 'Питер',
};

console.log(user[key]);
console.log(user['n' + 'a' + 'm' + 'e']);
