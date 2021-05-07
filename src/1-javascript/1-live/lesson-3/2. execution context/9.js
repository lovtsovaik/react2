/**
 * Стрелочные функции обладают статическим this,
 * который всегда указывает на «родительский» контекст.
 */

'use strict';

const user = {
    name: 'Walter',
    getThis() {
        debugger;
        console.log('→ 1 lvl this', this);

        return () => {
            debugger;
            console.log('→ 2 lvl this', this);
        };
    },
};

user.getThis() /* контекст вызова НЕ потерялся */();

// const innerMethod = user.getThis();
// innerMethod();
