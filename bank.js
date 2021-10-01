const Account = require("./models/Account.js");
const Transaction = require("./models/Transaction.js");

function createTransactionsFromStrings(transactionsAsStrings) {
    const transactions = [];
    for (let i = 0; i < transactionsAsStrings.length; i++) {
        const transactionAsArray = transactionsAsStrings[i].split(",");
        transactions.push(
            new Transaction(
                transactionAsArray[0],
                transactionAsArray[1],
                transactionAsArray[2],
                transactionAsArray[3],
                parseFloat(transactionAsArray[4])
            )
        );
    }
    return transactions;
}

function createAccountsFromTransactions() {
    const accountNames = [];

    for (let i = 0; i < transactions.length; i++) {
        if (!doesAccountNameAlreadyExist(transactions[i].from, accountNames)) {
            accountNames.push(transactions[i].from);
        }

        if (!doesAccountNameAlreadyExist(transactions[i].to, accountNames)) {
            accountNames.push(transactions[i].to);
        }
    }

    const accounts = [];

    for (const accountName of accountNames) {
        accounts.push(new Account(accountName));
    }

    return accounts;
}

function runTransactions() {
    for (const transaction of transactions) {
        const fromAccount = findAccount(transaction.from);
        if (fromAccount === undefined) {
            throw Error("From account not found");
        }
        fromAccount.balance -= transaction.amount;

        const toAccount = findAccount(transaction.to);
        if (toAccount === undefined) {
            throw Error("To account not found");
        }
        toAccount.balance += transaction.amount;
    }
}

function doesAccountNameAlreadyExist(accountName, accountNames) {
    for (let i = 0; i < accountNames.length; i++) {
        if (accountNames[i] === accountName) {
            return true;
        }
    }
    return false;
}

function findAccount(accountName) {
    for (const account of accounts) {
        if (account.name === accountName) {
            return account;
        }
    }
    return undefined;
}

exports.createTransactionsFromStrings = createTransactionsFromStrings;
exports.createAccountsFromTransactions = createAccountsFromTransactions;
exports.runTransactions = runTransactions;
