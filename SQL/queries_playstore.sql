-- Comments in SQL Start with dash-dash --
SELECT * FROM analytics WHERE id = 1880;
-- (1)This selects the app with an id of 1880 (displaying all information)

SELECT id, app_name FROM analytics WHERE last_updated = '2018-08-01';
-- (2)This selects the app(s) name & id that were last updated on August 02, 2018

SELECT category, COUNT(*) AS total FROM analytics GROUP BY category;
-- (3)This lists the the categories and their respective totals

SELECT * FROM analytics ORDER BY reviews DESC LIMIT 5; 
-- (4) This lists the top 5 most reviewed apps and the number of reviews for each

SELECT * FROM analytics WHERE rating >= 4.8 ORDER BY reviews DESC LIMIT 1;
-- (5) This lists the full information of the app that has the most reviews with a rating greater than or equal to 4.8

SELECT * FROM analytics WHERE price BETWEEN 0.10 AND 1 ORDER BY reviews DESC LIMIT 10;
-- (10) This lists the top 10 most reviewed apps that costs between $0.10 and $1.00

SELECT * FROM analytics WHERE last_updated = (SELECT MIN(last_updated) FROM analytics);
-- (11) This shows the most out of date app

SELECT * FROM analytics WHERE price = (SELECT MAX(price) FROM analytics);
-- (12) This shows the most expensive app

 SELECT SUM(reviews) FROM analytics;
-- (13) This shows the total number of reviews in the Google Play Store

SELECT category, COUNT(*) FROM analytics GROUP BY category HAVING COUNT(*) > 300;
-- (14)This lists all the categories with more than 300 apps in the respecitve category

SELECT app_name, reviews, min_installs, min_installs / reviews AS proportion FROM analytics WHERE min_installs >= 100000 ORDER BY proportion DESC LIMIT 1;
-- (15) This lists the app with the highest proportion of reviews to min_installs, among apps that have been installed at least 100,000 times. 

SELECT app_name, rating FROM analytics WHERE min_installs <= 50 AND rating > 0 ORDER BY rating DESC;
-- (8) This lists all the apps with a min install not exceeding 50, that have a rating, results ordered by highest rated first

SELECT app_name, rating FROM analytics WHERE rating < 3 AND reviews >= 10000;
-- (9) This lists all the apps with less than a 3 rating while having over 10,000 reviews

SELECT app_name, price, rating FROM analytics WHERE rating < 3 ORDER BY price DESC LIMIT 1;
-- (7) This lists the name price and rating of the app with the highest price that is rated below a 3.0

SELECT category, AVG(rating) FROM analytics GROUP BY category ORDER BY avg DESC;
-- (6) This lists the average rating for each category ordered by highest rated to lowest rated



