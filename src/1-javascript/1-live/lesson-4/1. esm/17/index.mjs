/**
 * Приём называется «ре-экспорт» (re-export).
 */
// 1. import { Header, Footer } from './components';
import * as Components from './components';

console.log(Components);
console.log(Components.Header);
console.log(Components.Main);
console.log(Components.Notification);
console.log(Components.Button);
console.log(Components.Footer);
