const express = require('express')
const app = express(); 
const ExpressError = require('./expressError')
const groceries = require('./routes/items')


app.use(express.json());

app.use('/items', groceries); 



app.use(function (req, res, next) {
    return new ExpressError('Not Found', 404)
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);

    return res.json({
        error: err.message
    });
});

module.exports = app; 