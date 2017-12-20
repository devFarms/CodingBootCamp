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

// List all the products
function listProducts() {
    var query = "SELECT * FROM products";
    con.query(query, function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + ") " + res[i].product_name + ", " + res[i].department_name + ", $" + res[i].price + ".00");
            
        }
        userPrompt();
    });
}

//Prompts the user for id number and how many items they would like to purchase
function userPrompt() {
  inquirer
      .prompt([
          {
              name: "idNum",
              message: "Please enter an id number for the product you would like to purchase.",
              type: "input"
          },
          {
              name:"quantity",
              message: "How many would you like to purchase?",
              type: "input"
          }
      ])
//      .then(function(input) {
      //     if (res[i].stock_quantity < input.quantity) {
             
      //         var item = input.item_id;
      //         var quantity = input.stock_quantity;

      //         if(quantity <= data.stock_quantity) {
      //             console.log("Thank you for placing your order with Bamazon!")
      //         }

      //         var update = "UPDATE products SET stock_quantity = " + (data.stock_quantity - quantity) + "WHERE item_id = " + item;

      //         connection.query(update, function(err, data) {
      //             if(err) throw err;

      //             console.log("Your order total is $" + data.price * quantity);
      //             console.log("----------------------------------------")
      //         })
      //     }
      //     else {
      //         console.log("We're sorry we have insufficient stock to fill your order, please modify your quantity")
      //         console.log("--------------------------------------");
      //         userPrompt();
              
      //     }
      // });

  .then(function(input) {
    console.log("hello");
  })
};