/*1 - Створіть функцію processArray(array, callback), яка приймає масив та функцію-колбек. 
Викличте processArray з різними масивами та функціями-колбеками, щоб виконати наступні операції:
Порахувати суму всіх елементів масиву.
Знайти мінімальний елемент масиву.
Знайти максимальний елемент масиву.
!!! Перепишіть колбек-функції на стрілки */
const processArray = (array, callback) => callback(array);

const getSum = (arr) => arr.reduce((acc, curr) => acc + curr);
const getMin = (arr) => Math.min(...arr);
const getMax = (arr) => Math.max(...arr);

const numbers = [12, 34, 56, 78, 90];

// console.log(processArray(numbers, getSum));
// console.log(processArray(numbers, getMin));
// console.log(processArray(numbers, getMax));

/* 2. Створіть функцію operate(a, b, callback), 
яка приймає два числа та колбек для виконання операції над ними. 
Використайте її для виконання наступних операцій:
Додавання.
Віднімання.
Множення.
Ділення.
!!!!  Перепишіть колбеки на стрілкові функції */

const operate = (a, b, callback) => callback(a, b);

const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Виклик функції з різними операціями
// console.log(operate(10, 5, add));
// console.log(operate(10, 5, substract));
// console.log(operate(10, 5, multiply));
// console.log(operate(10, 5, divide));

// додатково
/*4 з ЛМС - Напишіть функцію, яка приймає масив чисел і колбек-функцію. 
Функція повинна застосовувати колбек-функцію до кожного елементу масиву та повертати новий масив, 
що містить результати застосування колбек-функції до кожного елементу. */
const applyCallbackToEachElement = (arr, callback) => arr.map(callback);
const arr = [1, 2, 3, 4, 5];
const squareCallback = (num) => num * num;

const result = applyCallbackToEachElement(arr, squareCallback);
// console.log(result); // [1, 4, 9, 16, 25]
/*5 з ЛМС - Розрахунок дисконтної ціни
Створіть функцію, яка розраховує дисконтну ціну на товар з урахуванням знижки. 
Функція повинна приймати вартість товару та відсоток знижки як аргументи. 
Використайте стрілкову функцію та колбек.*/

const calculateDiscountedPrice = (price, discount, callback) =>
  callback(price - discount);
const showDiscountedPrice = (discountedPrice) =>
  console.log(`Discounted price: ${discountedPrice}`);

calculateDiscountedPrice(100, 10, showDiscountedPrice); // Discounted price: 90
