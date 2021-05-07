var name = 'Oliver';

/* print[[Scope]] = { name: 'Oliver } */
function print() {
    /* print[[LexicalEnvironment]] = {} */

    console.log('1', name);

    if (true) {
        /* [[LexicalEnvironment]] = { name: 'Walter' } */
        /* [[Scope]] = print[[LexicalEnvironment]] */
        const name = 'Walter';
    } else {
        /* [[LexicalEnvironment]] = { name: 'Hanna' } */
        /* [[Scope]] = print[[LexicalEnvironment]] */
        const name = 'Hanna';
    }

    console.log('2', name);
}

print();

console.log('3', name);
