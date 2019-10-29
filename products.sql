CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
    item_id INT NOT NULL,
    product_name VARCHAR (100) NULL,
    department_name VARCHAR (100) NULL,
    price DECIMAL NULL (6, 2),
    stock_quantity INT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Paintbrush", "Art", 2.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("TV", "Electronics", 599.97, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Xbox", "Electronics", 199.95, 7)

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nintendo", "Electronics", 25.95, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Drawling Paper", "Art", 12.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pencil", "Art", 0.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bucket Hat", "Style", 15.98, 125);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sunglasses", "Style", 19.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jenko Jeans", "Style", 79.98, 18);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Air Jordans", "Style", 275.95, 15);