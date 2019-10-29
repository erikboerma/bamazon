CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
    item_id INTEGER NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (100) NULL,
    department_name VARCHAR (100) NULL,
    price DECIMAL NULL (6, 2),
    stock_quantity INT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Paintbrush", "Art", 2.99, 5),
 ("TV", "Electronics", 599.97, 10),
 ("Xbox", "Electronics", 199.95, 7),
 ("Nintendo", "Electronics", 25.95, 5),
 ("Drawling Paper", "Art", 12.99, 20),
 ("Pencil", "Art", 0.99, 100),
 ("Bucket Hat", "Style", 15.98, 125),
 ("Sunglasses", "Style", 19.99, 20),
 ("Jenko Jeans", "Style", 79.98, 18),
 ("Air Jordans", "Style", 275.95, 15);

 SELECT * FROM products;