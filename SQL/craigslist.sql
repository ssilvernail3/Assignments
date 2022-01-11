-- in terminal 
-- psql < craigslist.sql
--psql craigslist 

DROP DATABASE IF EXISTS craigslist;

CREATE DATABASE craigslist;

\c craigslist

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL, 
    preferred_region TEXT NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL, 
    user_id INTEGER REFERENCES users,
    category TEXT NOT NULL,
    post_location TEXT NOT NULL,
    post_region TEXT NOT NULL
);

INSERT INTO users
    (username, password, preferred_region)
VALUES
('arlo_rox', 'puppyparty1', 'Los Angeles'),
('dexter_the_aussie', 'codingrocks22', 'Dallas'),
('princess_gabbi', 'elmorules212!', 'New York City');

INSERT INTO posts 
    (name, user_id, category, post_location, post_region)
VALUES
('PS5 for Sale', 1, 'Electronics', 'Dallas', 'Dallas'),
('Louis Vuitton *Brand New Never Used*', 2, 'Designer', 'San Diego', 'Los Angeles'),
('Free Desk', 3, 'Furniture', 'Brooklyn', 'New York City');