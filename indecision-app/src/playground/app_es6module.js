// 对象解构错误？addd: add
import subtract, { square, add as addd, mult} from './utils.js';
import isSenior, { isAdult, canDrink } from './person.js';

// first
console.log("app.js is running!");
console.log(square(4));
console.log(addd(3, 5));
console.log(mult(3, 5));
console.log(subtract(5, 3));
// second
console.log(isAdult(17));
console.log(canDrink(22));
console.log(isSenior(66));