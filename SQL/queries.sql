SELECT * FROM owners FULL JOIN vehicles ON owners.id = vehicles.owner_id;
-- This query joins the Owners and Vehicles tables so that all columns and rows appear even if there is not an 'owner_id'

SELECT first_name, last_name, COUNT(*) FROM owners JOIN vehicles ON owners.id = vehicles.owner_id GROUP BY first_name, last_name ORDER BY count(*);
-- This query counts the number of cars for each owner, and displays their first and last name and count of vehicles respective to each owner. 

SELECT first_name, last_name, ROUND(AVG(price)) AS average_price, COUNT(owner_id) FROM owners JOIN vehicles ON owners.id = vehicles.owner_id GROUP BY first_name, last_name HAVING count(owner_id) > 1 AND ROUND(AVG(price)) > 10000 ORDER BY first_name DESC; 
-- This query counts the number of cars for each owner and displays the average price for each of the cars they own respectively where the owner has more than one car and the price of the average of their cars is over $10,000

