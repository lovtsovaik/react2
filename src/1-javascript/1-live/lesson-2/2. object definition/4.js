/**
 * Или получить доступ к свойству, которое написано не стандартным путём.
 */
const user = {
    'special-price': 0.99,
    // 123: 0.99,
    'Content-Type': '...',
};

console.log(user);
console.log(user['special-price']);
console.log(user['Content-Type']);
// console.log(user.Content - Type);
