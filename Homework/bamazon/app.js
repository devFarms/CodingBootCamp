var mysql = require("mysql");
var inquirer = require("inquirer");

var con = mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root",
    password: "root",
    database: "bamazon"
});

con.connect(function (err) {
    if (err) throw err;
    listProducts();
    // con.query("SELECT * FROM products", function (err, result, fields) {
    //     if (err) throw err;
    //     console.log(result);
    //     });
});

function listProducts() {
    var query = "SELECT * FROM products";
    con.query(query, function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log("ID #" + res[i].item_id + " " + res[i].product_name + " " + res[i].department_name + " $" + res[i].price + ".00\n");
        }
    });
}