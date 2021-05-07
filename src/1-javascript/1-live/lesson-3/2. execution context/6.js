/**
 * Если одну и ту-же функцию запускать в контексте разных объектов, но она будет получать разный this.
 */

'use strict';

function getName() {
    debugger;
    console.log(this.name);
}

const user1 = { name: 'Уолтер', getName };
const user2 = { name: 'Джек', getName };

user1.getName();
user2.getName();
