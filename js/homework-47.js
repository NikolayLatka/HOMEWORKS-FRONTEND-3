// 1. Напиши скрипт, який об'єднує всі елементи массива в один рядок.
//  Елементів може бути довільна кількість.
// Нехай елементи массива в рядку будут розділені комою.

// 👉 Спочатку через for

// const friends = ["Mango", "Poly", "Kiwi", "Ajax"];

// let string = "";

// for (let i = 0; i < friends.length; i += 1) {
//   string += friends[i];
//   if (i < friends.length - 1) {
//     string += ",";
//   }
// }

// console.log(string);

// 👉 Потім через join()

// console.log(friends.join(","));

// 2. Працюємо з колекцією карток в trello.
// Метод splice()(можна використати інші методи)

// const cards = ["card-1", "card-2", "card-3", "card-4", "card-5"];

// cards.splice(3, 1);

// console.log(cards);

// cards.splice(3, 0, "brand-new-card");

// console.log(cards);

// cards.splice(1, 3, "?card?");

// console.log(cards);

// 3. Видалити

// const deleteCard = "card-3";

// console.log(cards.indexOf(deleteCard));

// if (deleteCard !== -1) {
//   cards.splice(2, 1);
// }

// console.log(cards);

// 4. Додати

// const addCard = "card-6";

// cards.push(addCard);

// console.log(cards);

// 5. Оновити

// const updateCard = "card-4";

// const indexOfUpdateCard = cards.indexOf(updateCard);

// if (indexOfUpdateCard !== -1) {
//   cards[indexOfUpdateCard] = "card-4_new";
// }

// console.log(cards);

// ДОДАТКОВЕ, ОБОВ'ЯЗКОВЕ ЗАВДАННЯ:

// Перетворити масив:

// const arrayOriginal = [
//   "мango-10",
//   "Kiwi-2",
//   "Monkong-2",
//   "Singu-2",
//   "Mango-1",
//   "Ajax-1",
//   "Poly-1",
//   "singu-20",
// ];

// на масив arrayNew:
//todo: ["Mango-1", "Ajax-1", "Poly-1", "Kiwi-2", "Monkong-2", "Singu-2"];

// не змінюючи значення елементів та використовуючи методи:
// push(), pop(), unshift(), shift(),
// slice(), splice(), concat() за власним бажанням!

// let arrayNew = [];

//! Код виконаного завдання

// arrayOriginal.shift();

// arrayOriginal.pop();

// const saveDeleted = arrayOriginal.slice(0, 3);
// const saveDeletedsecond = arrayOriginal.slice(3);
// arrayNew = saveDeletedsecond.concat(saveDeleted);

// console.log("arrayOriginal:", arrayOriginal);
// console.log("arrayNew:", arrayNew);
// console.log(saveDeleted);

// const arrayOriginal = [
//   "мango-10",
//   "Kiwi-2",
//   "Monkong-2",
//   "Singu-2",
//   "Mango-1",
//   "Ajax-1",
//   "Poly-1",
//   "singu-20",
// ];

// arrayOriginal.splice(0, 1);

// arrayOriginal.splice(0, 4);

// arrayOriginal.splice(0, 3);

// arrayOriginal.splice(7, 1);

// arrayOriginal.splice(4, 0, "Smth");

// arrayOriginal.splice(5, 1, "smth");

// console.log(arrayOriginal);
