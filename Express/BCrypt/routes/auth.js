/** Routes for demonstrating authentication in Express. */

const express = require("express");
const router = new express.Router();
const ExpressError = require("../expressError");
const db = require("../db");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { ensureLoggedIn, ensureAdmin } = require('../middleware/auth');
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require('../config');

router.get('/', (req, res, next) => {
  res.send("APP IS WORKING!!!")
});

router.post('/register', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new ExpressError('Username and Password required', 400);
    };
    const hashedPw = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
    const results = await db.query('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING username', [username, hashedPw]);
    return res.json(results.rows[0]);
  } catch (e) {
    if (e.code === '23505') {
      return next( new ExpressError('Username Taken Choose another', 400));
    }
    return next(e);
  };
});


router.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new ExpressError('Username and Password required', 400);
    };
    const results = await db.query('SELECT username, password FROM users WHERE username = $1', [username])
    const user = results.rows[0]; 
    if (user) {
      if (await bcrypt.compare(password, user.password) === true) {
        const token = jwt.sign({ username, type: "admin" }, SECRET_KEY);
        return res.json({ token });
      };
    };
    throw new ExpressError('Invalid Username / Password', 400)
  } catch (e) {
    return next(e);
  };
})


router.get('/topsecret', ensureLoggedIn, (req, res, next) => {
  try {
    return res.json({ msg: 'SIGNED IN! THIS IS TOP SECRET: I LOVE GREEN!!' }); 
    
  } catch (e) {
    return next(new ExpressError('Please login first', 401));
  }
})


router.get('/private', ensureLoggedIn, (req, res, next) => {
  try {
    return res.json({ msg: `Welcome to my VIP section, ${req.user.username}` }); 
  } catch (e) {
    return next(); 
  }
})

router.get('/adminhome', ensureAdmin, (req, res, next) => {
  try {
    return res.json({ msg: `ADMIN DASHBOARD, ${req.user.username}` }); 
  } catch (e) {
    return next(); 
  }
})
module.exports = router;

