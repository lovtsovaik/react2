'use strict';

let n = 1;

{
    let n = 2;
    console.log(n); // 2

    n = 3;

    console.log(n); // 3
}

console.log(n); // 1
