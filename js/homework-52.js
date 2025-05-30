// 1
// Напиши сценарій керування особистим кабінетом інтернет-банку.
// Є об'єкт account в якому необхідно реалізувати методи
// для роботи з балансом та історією транзакцій.
/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};
/*
 * Кожна транзакція - це об'єкт з властивостями: 
id, type і amount
 */
const account = {
  // Поточний баланс рахунку
  balance: 0,
  // Історія транзакцій
  transactions: [],
  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */
  createTransaction(amount, type) {
    const transaction = {
      id: this.transactions.length,
      type: type,
      amount: amount,
    };
    return transaction;
  },
  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */

  deposit(amount) {
    const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.balance += amount;
    this.transactions.push(newTransaction);
  },
  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {
    const newTransaction = this.createTransaction(amount, Transaction.WITHDRAW);
    if (amount > this.balance) {
      return "Зняття такої суми неможливе! Недостатньо коштів";
    }
    this.balance -= amount;
    this.transactions.push(newTransaction);
  },
  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },
  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
    return "Not found!";
  },
  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {},
};

console.log(account.getBalance());
account.deposit(100);
console.log(account.getBalance());
account.deposit(10);
console.log(account.getBalance());
account.withdraw(20);
console.log(account.getBalance());
account.withdraw(40);
console.log(account.getBalance());

console.log("Transaction 1: ");
console.log(account.getTransactionDetails(1));
console.log("Transaction 3: ");
console.log(account.getTransactionDetails(3));
console.log("Transaction 4: ");
console.log(account.getTransactionDetails(4));

console.log(
  "Withdrawals: " + account.getTransactionTotal(Transaction.WITHDRAW)
);
console.log("Deposits: " + account.getTransactionTotal(Transaction.DEPOSIT));
