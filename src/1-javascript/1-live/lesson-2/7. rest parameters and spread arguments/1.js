/**
 * С помощью оператора ... (rest, от англ. слова остаток), можно собрать все параметры в единый массив.
 * С помощью такого синтаксиса в последствии можно
 * вызывать функцию с произвольным количеством аргументов.
 *
 * Остаточные параметры, собранные с помощью оператора ... (rest)
 * являются улучшенной версией arguments.
 */

function print(a, b, c, ...restParameters) {
    console.log(a, b, c);
    console.log(restParameters);

    console.log(Array.isArray(restParameters));
}

print(1, 2, 3);
console.log('---');
print(1, 2, 3, 4, 5);
