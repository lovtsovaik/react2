/**
 * То есть ещё раз: значение, которое получит this внутри функции определяется не тем,
 * как она написана, а тем, как она вызвана.
 */

'use strict';

function getName() {
    debugger;
    console.log(this.name);
}

const user = {
    name: 'Уолтер',
    getName,
    inner: {
        name: 'Джесси',
        getName,
    },
};

user.getName();
user.inner.getName();
