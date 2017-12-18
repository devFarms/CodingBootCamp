CREATE DATABASE bamazon;

CREATE TABLE products ( item_id INT NOT NULL AUTO_INCREMENT, product_name TEXT, department_name TEXT, price DECIMAL, stock_quantity INT, PRIMARY KEY (item_id) );

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("DVD Player", "Electronics", 50.00, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Socks", "Clothing", 1.00, 25);