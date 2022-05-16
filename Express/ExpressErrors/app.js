const express = require('express');
const ExpressError = require('./expressError')
const morgan = require('morgan')
const userRoutes = require('./userRoutes')
const middleware = require('./middleware')

const app = express();

app.use(express.json());
// app.use(middleware.logger); 
app.use(morgan('dev')); 



app.use('/users', userRoutes)
app.get('/favicon.ico', (req,res) => res.sendStatus(204))


app.get('/secret', middleware.checkForPassword, (req, res, next) => {
    return res.send('I LOVE YOU <3')
}); 

app.get('/private', middleware.checkForPassword, (req, res, next) => {

    return res.send('YOU HAVE REACHED THE PRIVATE PAGE IT IS PRIVATE')
});



app.use((req, res, next) => {
    console.log('THE SERVER GOT A REQUEST!!')
    next(); 
}); 
app.use((req, res, next) => {
    console.log('HELLO DONT MIND ME!!')
    next(); 
}); 

function attemptToSaveToDB() {
    throw "Connection Error!"
}

const USERS = [
    { username: "StacysMom", city: "Reno" },
    { username: "Rosalia", city: "R" }
];

app.get("/users/:username", function (req, res, next) {
    const user = USERS.find(u => u.username === req.params.username);
    if (!user) throw new ExpressError('INVALID USERNAME', 404);
    return res.send({ user });
});

app.get('/secret', (req, res) => {
    debugger;
    try {
        if (req.query.password != 'popcorn') {
            throw new ExpressError('invalid password', 403)
        }
    
        return res.send('CONGRATS YOU KNOW THE PASSWORD!')
    } catch (e) {
        next(e)
    }

    })

app.get('/savedtodb', (req, res) => {
    attemptToSaveToDB();
    res.send('SAVED TO DB!!')
}); 



app.listen(3000, function () {
    console.log('App on port 3000')
});