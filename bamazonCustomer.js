var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon_DB"
});

connection.connect(function (err) {
  console.log("Welcome to bAmazon, your 2nd most popular place for online shopping!  Todays deal: Free 25 day shipping!\n");
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    for (i = 0; i < res.length; i++) {
      console.log("Item ID: " + res[i].item_id + " || " +
        "Product: " + res[i].product_name + " || " +
        "Department: " + res[i].department_name + " || " +
        "Price: " + res[i].price + " || " +
        "Quantity: " + res[i].stock_quantity)
    }
    buy();
  })
});

function buy() {
  connection.query("SELECT * FROM products", function (err, results) {
    if (err) throw err;
    // var arr = [];
    // for (var i = 0; i < results.length; i++){
    //   arr.push(results[i].product_name);
    // }
    // console.log(arr);
    // console.log(results[1].product_name);
    // if (err) throw err;
    inquirer.prompt([
      {
        name: "id",
        type: "rawlist",
        choices: function () {
          // console.log(results);
          var choiceArray = [];
          for (var i = 0; i < results.length; i++) {
            choiceArray.push(results[i].product_name);
          }
          return choiceArray;
        },
        
        message: "What would you like to buy?"
      },
      {
        name: "quantity",
        type: "input",
        message: "How many would you like to buy?"
        }
    ])
      // product_name, department_name, price, stock_quantity
      .then(function (answer) {
        // console.log(answer);
        
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].product_name === answer.id) {
            chosenItem = results[i];
          }
        }
        // console.log(answer.quantity);
        // console.log(chosenItem.stock_quantity);
        // console.log(chosenItem);
        if (answer.quantity <= chosenItem.stock_quantity) {
          var quantity = chosenItem.stock_quantity - answer.quantity;
          console.log(quantity);
          console.log(stock_quantity);
          console.log(chosenItem.product_name);
          console.log(product_name);
          connection.query(
            "UPDATE products SET ? WHERE ?",
            [{
              stock_quantity: quantity
            },
            {
              product_name: chosenItem.product_name
            }
            ],
            function (err) {
              if (err) throw err;
              console.log("Product purchased, you will receive it in 25 days!")
              // connection.end();
            }
          )
        } else {
          console.log("Sorry, we don't have that many left..");
          // connection.end();
          buy();
        }
      })
  })
  connection.end();

}
  