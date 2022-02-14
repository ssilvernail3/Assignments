### Conceptual Exercise

Answer the following questions below:

- What is PostgreSQL?
  - PostgreSQL is a database ORM that is used to manage databases and queries to handle CRUD

- What is the difference between SQL and PostgreSQL?
  - SQL is the method by which we obtain specific information, PSQL is how the data is stored

- In `psql`, how do you connect to a database?
  - \c <NAME_OF_DB>

- What is the difference between `HAVING` and `WHERE`?
  - WHERE is used to specify how we filter a query, HAVING is used to specify a condition for fitlering from a group. 

- What is the difference between an `INNER` and `OUTER` join?
  - INNER join joins the rows that are matching 
  - OUTER join joins on either RIGHT, LEFT, FULL of which depends on which sides are matching. 

- What is the difference between a `LEFT OUTER` and `RIGHT OUTER` join?
  - LEFT joins all matching rows from the first table to the second table RIGHT
  - RIGHT joins all matching rows from the right side of the table to the LEFT

- What is an ORM? What do they do?
  - ORM is object relational mapping which creates databases to display information

- What are some differences between making HTTP requests using AJAX 
  and from the server side using a library like `requests`?
  
  AJAX requests pull request information from an API and return without refreshing the page, whereas server side requests require the page to refresh in order to display changes from each request. 


- What is CSRF? What is the purpose of the CSRF token?
  - CSRF is Cross Site Request Foregery and the CSRF token stops unwanted persons from accessing your data and manipulating it. 

- What is the purpose of `form.hidden_tag()`?
  - This hides the CSRF token from being seen when loading up a page. 
