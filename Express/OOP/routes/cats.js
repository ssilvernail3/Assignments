/** Cat routes for express-pg-oo */

const express = require("express");
const db = require("../db");
const Cat = require('../models/cat')
const router = new express.Router();


// IMPORTANT: all of these function bodies should really be
// wrapped in a try/catch, where catching an error calls
// next(err) --- this is omitted here for brevity in slides


/** get all cats: [{id, name, age}, ...] */

router.get("/", async function (req, res, next) {
  try {
    const cats = await Cat.getAll();
    return res.json(cats)

  } catch (e) {
    return next(e); 
  };
});


router.get('/:id', async (req, res, next) => {
  try {
    const cat = await Cat.getById(req.params.id); 
    return res.json(cat)
  } catch (e) {
    return next(e);
  }

})


router.post('/', async (req, res, next) => {
  try {
    const { name, age } = req.body; 
    const cat = await Cat.create(name, age);  
    return res.json(cat)
  } catch (e) {
    return next(e);
  }
})


router.put('/:id', async (req, res, next) => {
  try {
    const { name, age } = req.body; 
    const cat = await Cat.update(req.params.id, name, age);  
    return res.json(cat)
  } catch (e) {
    return next(e);
  }
})

router.patch('/:id', async (req, res, next) => {
  try {
    const cat = await Cat.makeOlder(req.params.id);  
    return res.json(cat)
  } catch (e) {
    return next(e);
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const result = await Cat.delete(req.params.id); 
    return res.json({ msg: 'Cat has been deleted!' }); 
  } catch (e) {
    return next(e);
  }
})
module.exports = router;