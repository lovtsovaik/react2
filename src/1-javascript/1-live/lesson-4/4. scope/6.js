var name = 'Oliver';

/* print[[Scope]] = { name: 'Oliver } */
function print() {
    /* print[[LexicalEnvironment]] = {} */

    console.log('1', name);

    if (true) {
        name = 'Walter';
    } else {
        name = 'Hanna';
    }

    console.log('2', name);
}

print();

console.log('3', name);
