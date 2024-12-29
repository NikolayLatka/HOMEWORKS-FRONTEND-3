// 1. Створіть змінну, що симулює вибір варіанта зі списку.
// Виводьте повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік".
// Використайте switch

// const choice = "coffe";

// switch (choice) {
//   case "coffe":
//     console.log("U chose coffe");
//     break;
//   case "tea":
//     console.log("U chose tea");
//     break;
//   case "juice":
//     console.log("U chose juice");
//     break;
//   default:
//     console.log("Tf u chose?");
// }

// 2. Створіть змінну для зберігання введеного рядка, який може бути днем тижня.
// Якщо це робочий день — виведіть повідомлення про робочий день, якщо вихідний — про вихідний.

// const dayOfWeek = "Monday";

// switch (dayOfWeek.toLowerCase()) {
//   case "Monday":
//   case "Tuesday ":
//   case "Wednesday":
//   case "Thursday":
//   case "Friday":
//     console.log("U have to work!!!");
//     break;
//   case "Saturday":
//   case "Sunday":
//     console.log("U can play console!!!");
//     break;
//   default:
//     console.log("I can't see any day of week");
// }

// I guess that I don't have to add ".toLowerCase()" but in my opinion is more correct and just for inn case :)

// 3. Створіть змінну для зберігання номера місяця.
// За номером місяця визначайте пору року і виводьте відповідне повідомлення.

// const numOfMonth = 11;

// switch (numOfMonth) {
//   case 12:
//   case 1:
//   case 2:
//     console.log("That is winter :)");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("That is spring :)");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("That is summer :)");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("That is autumn :)");
//     break;
//   default:
//     console.log("Wrong number of month :(");
// }

// 4. Створіть змінну для зберігання назви кольору.
// Виводьте повідомлення відповідно до вибраного кольору:
// якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".

// const colour = "yellow";

// switch (colour.toLowerCase()) {
//   case "red":
//     console.log("STOOOOOOOOOP!!!");
//     break;
//   case "yellow":
//     console.log("Wait, they don't love you like I love you");
//     break;
//   case "green":
//     console.log("GO GO GO");
//     break;
//   default:
//     console.log("Wrong colour");
// }

// 5. Створіть змінні для зберігання двох чисел та оператора (як у списку select).
// Виконайте відповідну операцію та виведіть результат.
// У випадку ділення на нуль — виведіть попередження.

// const num1 = 47;

// const num2 = 7;

// const operator = "/";

// let result;

// switch (operator) {
//   case "+":
//     result = num1 + num2;
//     break;
//   case "-":
//     result = num1 - num2;
//     break;
//   case "*":
//     result = num1 * num2;
//     break;
//   case "/":
//     if (num2 === 0) {
//       result = "U can't do that with zero number";
//     } else {
//       result = num1 / num2;
//     }
//     break;
//   default:
//     result = "Wrong select";
// }

// console.log(result);
