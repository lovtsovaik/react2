/**
 * Двух-этапный порядок выполнения JavaScript-файла
 * имеет непосредственную связь с Global Lexical Environment.
 */

/* где-то внутри движка JavaScript на момент начала второй фазы выполнения (инициализации) */
const globalLexicalEnvironment = {
    greeting: undefined,
    getGreeting: '[Function: getGreeting]',
};

/* 1. Этап декларации: globalLexicalEnvironment: { greeting: undefined, getGreeting: [Function: getGreeting] } */
var greeting = 'Good morning.';
/* 2. Этап инициализации: globalLexicalEnvironment: { greeting: 'Good morning.', getGreeting: [Function: getGreeting] } */

/* 1. Этап декларации: globalLexicalEnvironment: { greeting: 'Good morning.', getGreeting: [Function: getGreeting] } */
function getGreeting() {
    return greeting;
}
/* 2. Этап инициализации: ничего не происходит */

/* 1. Этап декларации: ничего не происходит */
console.log(getGreeting());
/* 2. Этап инициализации: вызов функций getGreeting() и console.log(результат вызова getGreeting) */
