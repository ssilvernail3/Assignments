const express = require('express');
let axios = require('axios');
var app = express();

app.use(express.json()); 



app.post('/', function(req, res, next) {
  try {
    let results = req.body.developers.map(async d => {
      return await axios.get(`https://api.github.com/users/${d}`);
    });
    console.log(results);
    let out = results.map(r => ({ name: r.name, bio: r.bio }));

    return res.send(out);
  } catch(e){
    next(e);
  }
});

app.listen(3000, function () {
  console.log('Listening on port 3000'); 
});


app.get('https://api.github.com/users/joelburton', function (req, res, next) {
  let results = req.body;
  console.log(results);
})