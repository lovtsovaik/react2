/**
 * Поэтому, если метод был вызван неявно, то есть без непосредственного указания объект.метод(),
 * значение this будет потеряно.
 */

'use strict';

const user = {
    name: 'Walter',
    getThis() {
        debugger;
        console.log('→ 1 lvl this', this);

        return function() {
            debugger;
            console.log('→ 2 lvl this', this);
        };
    },
};

user.getThis() /* контекст вызова потерялся */();

// const innerMethod = user.getThis();
// innerMethod();
