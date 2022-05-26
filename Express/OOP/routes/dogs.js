const express = require("express");
const req = require("express/lib/request");
const db = require("../db");
const Dog = require("../models/dogs")
const router = new express.Router();



router.get('/', async (req, res, next) => {
    let dogs = await Dog.getAll()
    dogs.forEach(d => d.speak()); 
    return res.json(dogs); 
})


router.get('/:id', async (req, res, next) => {
    try {
        let dog = await Dog.getById(req.params.id)
        return res.json(dog); 
    } catch (e) {
        return next(e);
    };
})
router.post('/', async (req, res, next) => {
    try {
        const { name, age } = req.body; 
        let dog = await Dog.create(name, age);
        return res.json(dog); 
    } catch (e) {
        return next(e);
    };
})

router.patch('/:id/age', async (req, res, next) => {
    try {
        let dog = await Dog.getById(req.params.id);
        dog.age += 1;
        await dog.save(); 
        return res.json(dog); 
    } catch (e) {
        return next(e);
    };
})
router.patch('/:id/rename', async (req, res, next) => {
    try {
        let dog = await Dog.getById(req.params.id);
        dog.name = req.body.name; 
        await dog.save(); 
        return res.json(dog); 
    } catch (e) {
        return next(e);
    };
})

router.delete('/:id', async (req, res, next) => {
    try {
        let dog = await Dog.getById(req.params.id)
        await dog.remove();
        return res.json({ msg: 'Deleted' }); 
    } catch (e) {
        return next(e);
    };
})


module.exports = router; 