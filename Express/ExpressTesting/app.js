const express = require('express')
const app = express(); 
const { append } = require('express/lib/response')
const ExpressError = require('./expressError')
const catsRoutes = require('./routes/cats')


app.use(express.json());
app.use('/cats', catsRoutes);


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