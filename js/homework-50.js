// 1 Створіть об'єкт "bankAccount" з властивостями
// "ownerName", "accountNumber", "balance".
// Додайте до об'єкту метод "deposit",
// який дозволяє додавати гроші на рахунок, та метод "withdraw",
// який дозволяє знімати гроші з рахунку.
// Використайте cofirm() щоб поповнити рахунок або
// отримати готівку та prompt() щоб дізнатися сумму.
// Після проведення операції виводити повідомлення про залишок на рахунку.

const bankAccount = {
  ownerName: "Mykola",
  accountNumber: 743978,
  balance: 300000,

  deposit() {
    if (confirm("Ви хочете поповнити рахунок?")) {
      let amount = parseFloat(prompt("Введіть суму для поповнення:"));
      if (!isNaN(amount) && amount > 0) {
        this.balance += amount;
        alert(
          `Ваш рахунок поповнено на ${amount} грн.\nЗалишок: ${this.balance} грн.`
        );
      } else {
        alert("Некоректна сума.");
      }
    }
  },

  withdraw() {
    if (confirm("Хочете зняти гроші?")) {
      let amount = parseFloat(prompt("Введіть суму для зняття:"));
      if (!isNaN(amount) && amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        alert(`Ви зняли ${amount} грн.\nЗалишок: ${this.balance} грн.`);
      } else {
        alert("Недостатньо коштів або некоректна сума.");
      }
    }
  },
};

bankAccount.deposit();
bankAccount.withdraw();

// 2 Створіть об'єкт "weather" з властивостями
// "temperature", "humidity", "windSpeed".
// Додайте до об'єкту метод, який повертає "true",
// якщо температура нижче 0 градусів Цельсія,
// та "false", якщо температура вище або рівна 0 градусів Цельсія.
// Температуру потрібно отримати з prompt().
// Якщо метод повернув "true" вивести повідомлення
// “температура нижче 0 градусів Цельсія” і навпаки

const weather = {
  temperature: "+17",
  humidity: "low",
  windSpeed: "0m",

  checkTempeture() {
    if (this.temperature > 0) {
      return true;
    }
    return false;
  },
};

// console.log(weather.checkTempeture());

// 3 Створіть об’єкт "user", який буде мати властивості
// "name", "email", "password".Додайте метод "login",
// який буде перевіряти правильність введеного email та password.

const user = {
  name: "Nikolay",
  email: "nikolay@email.com",
  password: "nikolay'spassword",

  login(email) {
    if (this.email.includes("@") && this.email.includes("email.com")) {
      return true;
    } else {
      return false;
    }
  },
};

// console.log(user.login());

// 4 Створіть об'єкт "movie" з властивостями
// "title", "director", "year", "rating".
// Додайте до об'єкту метод, який повертає "true",
// якщо рейтинг фільму вище 8, та "false",
// якщо рейтинг фільму 8 або нижче.Вивести значення властивостей в консоль.

const movie = {
  title: "Straight Outta Compton",
  director: "F. Gary Gray",
  year: 2015,
  rating: 7.8,

  realRating() {
    if (this.rating < 8) {
      return true;
    }
    return false;
  },
};

// console.log(movie.realRating());
