/**
 * После оператора ... (spread) при вызове функции
 * можно использовать передавать количество аргументов.
 *
 * В качестве значения для оператора ... (spread) можно
 * использовать любую итерируемую сущность, однако массивы
 * используются чаще всего.
 */
function print(param1, param2, param3, ...rest) {
    console.log(param1, param2, param3);
    console.log(rest);
}

print(...[1, 2], 3, ...[4, 5]);
// print(1, 2, 3, 4, 5);