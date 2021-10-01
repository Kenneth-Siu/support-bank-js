const fileReader = require("./fileReader.js");
const bank = require("./bank.js");

const transactionsAsStrings = fileReader.getLinesOfFile();
const transactions = bank.createTransactionsFromStrings(transactionsAsStrings);
const accounts = bank.createAccountsFromTransactions(transactions);
bank.runTransactions(transactions, accounts);
accounts.forEach((account) => console.log(account));
