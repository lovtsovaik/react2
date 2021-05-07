/**
 * Переменные, объявленные в теле функции становятся локальными автоматически.
 * Это работает для обычных и для стрелочных функций одинаково.
 */

const getFullName = () => {
    var name = 'Oliver';
    const surname = 'Blanc';

    return `${name} ${surname}`;
};

console.log(getFullName());

console.log(typeof name);
console.log(typeof surname);
