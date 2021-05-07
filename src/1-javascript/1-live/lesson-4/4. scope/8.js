/* print[[Scope]] = Global[[LexicalEnvironment]] */
function print(name) {
    /* print[[LexicalEnvironment]] = { name: 'Closure', displayName: [Function: displayName] } */

    /* displayName[[Scope]] = print[[LexicalEnvironment]] */
    function displayName() {
        /* displayName[[LexicalEnvironment]] = {} */

        console.log(name);
    }

    displayName();
}

print('Closure');
