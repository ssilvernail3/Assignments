const express = require("express");
const ExpressError = require("../expressError")
const router = express.Router();
const db = require("../db");
const slugify = require('slugify'); 




router.get('/', async (req, res, next) => {
    try {
        const results = await db.query('SELECT * FROM companies')
        return res.json({ companies: [results.rows] });
    } catch (e) {
        return next(e)
    };
});

router.get('/:code', async (req, res, next) => {
    try {
        const { code } = req.params;
        const results = await db.query('SELECT * FROM companies WHERE code=$1', [code]);
        if (results.rows.length === 0) {
            throw new ExpressError(`Cant find company with code: ${code}`, 404);
        }
        const invoices = await db.query('SELECT * FROM invoices WHERE comp_code=$1', [code]);
        return res.send({ company: results.rows[0], invoices: [invoices.rows] });
    } catch (e) {
        return next(e)
    };
});

router.post('/', async (req, res, next) => {
    try {
        const { name, description } = req.body;
        const code = slugify(name, { lower: true, replacement: '_', remove: undefined });
        const results = await db.query('INSERT INTO companies (code, name, description) VALUES ($1, $2, $3) RETURNING *', [code, name, description]);
        return res.status(201).json({ company: results.rows[0] });
    } catch (e) {
        return next(e); 
    }
})

router.patch('/:code', async (req, res, next) => {
    try {
        const { name, description } = req.body; 
        const { code } = req.params;
        const results = await db.query('UPDATE companies SET name=$1, description=$2 WHERE code=$3  RETURNING *', [name, description, code]);
        if (results.rows.length === 0) {
            throw new ExpressError(`Cant update company with code: ${code}`, 404);
        };
        return res.status(200).json({ company: results.rows[0] });
    } catch (e) {
        return next(e);
    }
})

router.delete('/:code', async (req, res, next) => {
    try {
        const { code } = req.params;
        const results = await db.query('DELETE FROM companies WHERE code=$1', [code]);
        return res.json({msg: 'Deleted Company'})
        
    } catch (e) {
        return next(e);
    }
})



module.exports = router; 