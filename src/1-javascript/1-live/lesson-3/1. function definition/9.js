/**
 * Когда-то с помощью IIFE создавали модульный код.
 * Впрочем, своё применение данные паттерн находит и в наши дни.
 */
const module = (function() {
    let name = 'Pitter';

    return {
        setName(val) {
            name = val;
        },
        getName() {
            return name;
        },
    };
})();

module.setName('Pitter');
console.log(module.getName());
