/**
 * Допустимо объявлять несколько фиксированных параметров,
 * а затем собирать остаток параметров в массив.
 */

function print(param, ...rest) {
    console.log(param);
    console.log(rest);
}

print(1, 2, 3, 4, 5);
