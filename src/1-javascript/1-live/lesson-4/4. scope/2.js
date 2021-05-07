/**
 * Такой порядок поиска является стандартным механизмом движка JavaScript.
 *
 * На самом деле, внутри LE каждой функции всегда создаётся ещё одно специальное свойство: [[Scope]].
 * Свойство [[Scope]] каждой функции содержит ссылку на [[LexicalEnvironment]], в котором функция была создана.
 * Как и [[LexicalEnvironment]], прямого доступа к [[Scope]] не существует.
 *
 * Свойство [[Scope]] является очень важным, потому что это связующее звено между
 * внутренним и внешним LE каждой функции.
 *
 * В данном примере при выполнении функции print происходят следующие шаги:
 * 1. Создаётся LE для print: print[[LexicalEnvironment]] = { [[Scope]]: Global [[LexicalEnvironment]] };
 * 2. Происходит выполнение тела функции print;
 * 3. При выполнении console.log(name) происходит обращение к переменной name;
 * 4. Сперва эта переменная ищется в локальном LE функции print — её там нет;
 * 5. Поэтому интерпретатор обращается к свойству [[Scope]] из LE функции print, чтобы поискать эту переменную снаружи;
 * 6. [[Scope]] функции print указывает на глобальный LE, в котором переменная name существует;
 * 7. Поэтому, найдя эту переменную, интерпретатор встречает её для в вызове console.log функции print.
 */

/* Global[[LexicalEnvironment]] = { name: 'Oliver', print: [Function: print ] } */
const name = 'Oliver';

/* print[[Scope]] = Global[[LexicalEnvironment]] */
function print() {
    /* print[[LexicalEnvironment]] = {} */

    const test = 'hello';

    debugger;

    console.log(name);
}

print();
