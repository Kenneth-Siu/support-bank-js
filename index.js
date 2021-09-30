const fs = require("fs");

class Account {
    constructor(name) {
        this.name = name;
        this.balance = 0;
    }
}

class Transaction {
    constructor(date, from, to, narrative, amount) {
        this.date = date;
        this.from = from;
        this.to = to;
        this.narrative = narrative;
        this.amount = amount;
    }
}

const transactionFileContents = fs.readFileSync("Transactions2014.csv", "utf8");
const transactionsAsStrings = transactionFileContents.split("\n");
removeHeader(transactionsAsStrings);

const transactions = [];

for (let i = 0; i < transactionsAsStrings.length; i++) {
    const transactionAsArray = transactionsAsStrings[i].split(",");
    transactions.push(
        new Transaction(
            transactionAsArray[0],
            transactionAsArray[1],
            transactionAsArray[2],
            transactionAsArray[3],
            transactionAsArray[4]
        )
    );
}

function removeHeader(transactionsAsStrings) {
    transactionsAsStrings.shift();
}


