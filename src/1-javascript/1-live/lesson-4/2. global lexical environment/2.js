/**
 * Переменные и функции, объявленные внутри тела функции называют локальными.
 * 
 * Сам по себе глобальный объект со вспомогательными свойствами и методами, на подобии window.location,
 * или global.setInterval является общей концепцией для любого окружения.
 * 
 * Однако в зависимости от движка, доступ к этому глобальному объекту с переменными не всегда является открытым.
 * 
 * Иными словами, глобальные объекты global или window — это не всегда одно и то-же,
 * что глобальный объект, в котором хранятся глобальные переменные и функции.
 */

function globalFunction() {
    const localFunction = () => {
        const localVariable = 'Good evening.';

        return localVariable;
    };

    const localVariable = localFunction();

    return localVariable;
}

console.log(globalFunction());
