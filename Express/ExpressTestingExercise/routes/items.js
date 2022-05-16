const express = require('express')
const router = new express.Router()
const ExpressError = require("../expressError")
const items = require('../fakeDb')


router.get('/', function (req, res) {
    res.json({ items })
}); 

router.post('/', function (req, res, next) {
    try {
        if (!req.body.name) throw new ExpressError("Name is required", 400)
        else if (!req.body.price) throw new ExpressError("Price is required", 400)
        const newItem = { name: req.body.name, price: req.body.price }
        items.push(newItem)
        return res.status(201).json({ "added": { item: newItem } } )
    } catch (e) {
        return next(e);
    };
    
} )

router.get('/:name', function (req, res) {
        const findItem = items.find(i => i.name === req.params.name)
        if (findItem === undefined) {
            throw new ExpressError('Item not found', 404)
        }
        res.json({ item: findItem }); 
        
   
})


router.patch('/:name', function (req, res) {
    const findItem = items.find(i => i.name === req.params.name)
    if (findItem === undefined) {
        throw new ExpressError('Item not found', 404)
    }
    findItem.name = req.body.name
    res.json({ item: findItem });
});

router.delete('/:name', function (req, res) {
    const findItem = items.findIndex(i => i.name === req.params.name)
    if (findItem === -1) {
        throw new ExpressError('Item not found', 404)
    }
    items.slice(findItem, 1);
    res.json({ message: 'Deleted' })
}); 




module.exports = router; 