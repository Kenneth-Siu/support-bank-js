const fs = require("fs");

function getLinesOfFile() {
    const transactionFileContents = fs.readFileSync("Transactions2014.csv", "utf8");
    const transactionsAsStrings = transactionFileContents.split("\n");
    removeHeader(transactionsAsStrings);
    return transactionsAsStrings();
}

function removeHeader(transactionsAsStrings) {
    transactionsAsStrings.shift();
}

exports.getLinesOfFile = getLinesOfFile;
