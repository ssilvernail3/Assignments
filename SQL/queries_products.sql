-- Comments in SQL Start with dash-dash --
INSERT INTO products(name, price, can_be_returned) VALUES('chair', 44.00, 'false');
-- This inserts a the "chair" product into the table with price of $44.00 and it is non returnable. 

INSERT INTO products(name, price, can_be_returned) VALUES('stool', 25.99, true);
-- This inserts a the "stool" product into the table with price of $25.99 and it is returnable.

INSERT INTO products(name, price, can_be_returned) VALUES('table', 124.00, false);
-- This inserts a the 'table' product into the table with a price of $124.00 and it is non returnable.

SELECT * FROM products;
-- This displays all columns and rows of the 'products' table

SELECT name FROM products;
-- This displays all the names of the products 

SELECT name, price FROM products;
-- This displays names and prices of the products 

INSERT INTO products(name, price, can_be_returned) VALUES('microphone', 98.00, false);
-- This inserts a 'microphone' product into the table with a price of $98.00 and it is non returnable. 

SELECT name FROM products WHERE can_be_returned = true;
-- This displays the products that can be returned 

SELECT name FROM products WHERE price < 44.00;
-- This displays the product(s) that are less than $44.00

SELECT name, price FROM products WHERE price BETWEEN 22.50 AND 99.99;
-- This displays the product(s) that are priced between $22.50 and $99.99

UPDATE products SET price = price - 20;
-- This updated the price of all the products to be $20 less

DELETE FROM products WHERE price < 25;
-- This deleted all the product(s) that were less than $25.00 after the sale

UPDATE products SET price = price + 20;
-- This updated the price of the remaining products to be $20.00 more than their sale price

UPDATE products SET can_be_returned = true;
-- This updated the product(s) to reflect new company policy that all products are now returnable
