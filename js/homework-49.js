// /*1 - Створіть функцію processArray(array, callback), яка приймає масив та функцію-колбек. Викличте processArray з різними масивами та функціями-колбеками, щоб виконати наступні операції:
// Порахувати суму всіх елементів масиву.
// Знайти мінімальний елемент масиву.
// Знайти максимальний елемент масиву.
// !!! Перепишіть колбек-функції на стрілки */
// const processArray = (array, callback) => {};

// const getSum = function(arr) {return arr.reduce((acc, curr) => acc + curr)}
// const getMin = function(arr) {return Math.min(...arr)}
// const getMax = function (arr) { return Math.max(...arr) }

// *1 - Створіть функцію processArray(array, callback), яка приймає масив та функцію-колбек.
// Викличте processArray з різними масивами та функціями-колбеками, щоб виконати наступні операції:
// Порахувати суму всіх елементів масиву.
// Знайти мінімальний елемент масиву.
// Знайти максимальний елемент масиву.
// !!! Перепишіть колбек-функції на стрілки */
// const processArray = (array, callback) => {
//   return callback(array);
// };

// const getSum = (arr) => {
//   return arr.reduce((acc, curr) => acc + curr);
// };
// const ge
// const getMin = (arr) => {
//   return Math.min(...arr);
// };
// const getMax = (arr) => {
//   return Math.max(...arr);
// };
// // console.log(
// //   processArray([1, 2, 3], getSum),
// //   processArray([1, 2, 3], getMin),
// //   processArray([1, 2, 3], getMax)
// // );

// /* 2. Створіть функцію operate(a, b, callback), яка приймає два числа та колбек для виконання операції над ними. Використайте її для виконання наступних операцій:
// Додавання.
// Віднімання.
// Множення.
// Ділення.
// !!!!  Перепишіть колбеки на стрілкові функції */

// const operate = (a, b, callback) => {};

// // Виклик функції з різними операціями
// console.log(operate(10, 5, function(a, b){ return a - b})); // Віднімання
// console.log(operate(10, 5, function(a, b){ return a + b})); // Додавання
// console.log(operate(10, 5, function(a, b){ return a * b})); // Множення
// console.log(operate(10, 5, function(a, b){ return a / b})); // Ділення

// // додатково
// /*4 з ЛМС - Напишіть функцію, яка приймає масив чисел і колбек-функцію. Функція повинна застосовувати колбек-функцію до кожного елементу масиву та повертати новий масив, що містить результати застосування колбек-функції до кожного елементу. */
// const applyCallbackToEachElement = (arr, callback) => { }
//   const arr = [1, 2, 3, 4, 5];
//   const squareCallback = ;

//   const result = applyCallbackToEachElement(arr, squareCallback);
//   console.log(result); // [1, 4, 9, 16, 25]
// /*5 з ЛМС - Розрахунок дисконтної ціни
// Створіть функцію, яка розраховує дисконтну ціну на товар з урахуванням знижки. Функція повинна приймати вартість товару та відсоток знижки як аргументи. Використайте стрілкову функцію та колбек.*/

// const calculateDiscountedPrice = (price, discount, callback) => {};
//   const showDiscountedPrice = ;

//   calculateDiscountedPrice(100, 10, showDiscountedPrice); // Discounted price: 90
