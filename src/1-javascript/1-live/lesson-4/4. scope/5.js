/**
 * Эффект, когда во внутреннем LE функции создаётся свойство,
 * имя которого уже присутствует во внешнем LE называют shadowing.
 *
 * Shadowing является плохой практикой.
 */

var name = 'Oliver';

/* print[[Scope]] = { name: 'Oliver } */
function print() {
    /* print[[LexicalEnvironment]] = { name: undefined } */

    debugger;
    console.log('1', name);

    if (true) {
        name = 'Walter';
    } else {
        var name = 'Hanna';
        debugger;
    }

    debugger;

    console.log('2', name);
}

print();

console.log('3', name);
