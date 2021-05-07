/**
 * Напоминалка.
 *
 * Для переменных типа var и для function declaration обычные блочные конструкции
 * типа if, for и вообще любой блок не делают эти переменные локальными.
 *
 * Переменные типа let и const — напротив, становятся локальными в любом блоке.
 */

{
    var name1 = 'Oliver';
    const name2 = 'Jessica';
    function getName1() {
        return name1;
    }

    console.log('1', typeof name1);
    console.log('1', typeof name2);
    console.log('1', typeof getName1);
}

console.log('2', typeof name1);
console.log('2', typeof name2);
console.log('2', typeof getName1);
