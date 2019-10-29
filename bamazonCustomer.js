var mysql = require ("mysql");

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

  connection.connect(function(err){
      console.log("Welcome to bAmazon, your 2nd most popular place for online shopping!  Todays deal: Free 25 day shipping!\n");
      connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;
        for (i = 1; i < res.length; i++){
            console.log("Item ID: " + res[i].item_id + " || " +
            "Product: " + res[i].product_name + " || " +
            "Department: " + res[i].department_name + " || " +
            "Price: " + res[i].price + " || " +
            "Quantity: " + res[i].stock_quantity)
        }
        // console.log(res);
        connection.end();

      })
  });