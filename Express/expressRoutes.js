const express = require('express');
const res = require('express/lib/response');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', function (req, res) {
    res.send('HOMEPAGE!')
})

app.get('/dogs', function (req, res) {
    console.log('First route great success!')
    // console.log(req)
    return res.send('WOOF WOOF')
});

app.get('/chickens', (req, res) => {
    res.send('BOCK BOCK BOCK (get request)');
});

app.post('/chickens', function createChicken(req, res) {
    res.send('YOU MADE A NEW CHICKEN NOT REALLY (post request)')
});

const greetings = {
    en: 'hello',
    fr: 'bonjour',
    ic: 'hallo',
    js: 'konnichiwa'
}

app.get('/greet/:language', function (req, res) {
    const lang = req.params.language;
    const greeting = greetings[lang];
    if(!greeting) return res.send('INVALID LANGUAGE')
    return res.send(greeting);
}); 

app.get('/search', (req, res) => {
    const { term = 'piggies', sort = 'top' } = req.query; 
    return res.send(`SEARCH PAGE!! Term is ${term} and Sort is ${sort}`); 
})


app.get('/show-me-headers', (req, res) => {
    res.send(req.headers);
});


app.post('/register', (req, res) => {
    res.send(`Welcome! ${req.body.username}`);

}) 

app.get('/show-language', (req, res) => {
    const lang = req.headers['accept-language']
    res.send(`Your language preference is ${lang}`)
}); 


app.listen(3000, function () {
    console.log('App on port 3000')
});