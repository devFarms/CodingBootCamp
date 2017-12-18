// Starting from scratch, build a Node application called bank.js which allows takes in user inputs via the command line to register bank transactions.

var fs = require("fs");

var action = process.argv[2];
var value = Number(process.argv[3]);
var fileName = "bank.txt";

// The transactions possible are:

// total - this should tally up all of the money in the bank balance and display it for the user.

if (action === "total") {
    total()

    // deposit <number> - this should add a positive amount to the bank balance. (No need to display the total here)

} else if (action === "deposit") {
    deposit()

    // withdraw <number> - this should add a negative amount to the bank balance. (No need to display the total here)

} else if (action === "withdrawl") {
    withdrawl()

    // lotto - this should subtract an amount from the bank balance, but if a random number is hit it should add back a larger amount into the bank balance.

} else if (action === "lotto") {
    lotto()
}

function total (){
    fs.readFile(fileName, "utf8", function(err, data){
        data = data.split(", ");
        var result = 0;
        for (var i = 0; i < data.length; i++ {
            var myNum = Number(data[i])
            if (myNum) {
                result += myNum;
            }
        }
        console.log(result.toFixed(2));
    })
};

function deposit (){
    fs.appendFile(fileName, `, ${value}`);
    console.log(`${value}`);
}

function withdrawl(){
    fs.appendFile(fileName, `, -${value}`);
}
// For all deposits, withdrawals, or lotto purchases the transaction should be registered in the bank.txt file.

// HINT: Consider making a series of if-then or switch-case statements to identify the “type” of transaction and the “amount” involved (if relevant).

// Bonus: If you finish early, consider finding creative ways to expand the functionality. Perhaps add a login, perhaps always provide the total, perhaps add a warning if the user tries to withdraw more than they hold, etc.
