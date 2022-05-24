const express = require("express");
const ExpressError = require("../expressError")
const router = express.Router();
const db = require("../db");

router.get('/', async (req, res, next) => {
    try {
        const results = await db.query('SELECT * FROM invoices');
        return res.json([results.rows])
    } catch (e) {
        return next(e);
    }
})
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const results = await db.query('SELECT * FROM invoices WHERE id=$1', [id]);
        if (results.rows.length === 0) {
            throw new ExpressError(`Cant find invoice with id ${id}`);
        };
        const { comp_code } = results.rows[0];
        const company = await db.query('SELECT * FROM companies WHERE code=$1', [comp_code])
        return res.json({ invoice: results.rows[0], company: company.rows[0] });
    } catch (e) {
        return next(e);
    }
})

router.post('/', async (req, res, next) => {
    try {
        const { id, comp_code, amt, paid, add_date, paid_date } = req.body;
        const results = await db.query(`INSERT INTO invoices (id, comp_code, amt, paid, add_date, paid_date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`, [id, comp_code, amt, paid, add_date, paid_date]);
        return res.status(201).json({ invoice: results.rows[0] });
    } catch (e) {
        return next(e);
    };
})

router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { amt } = req.body
        let paidDate = null;
        const results = await db.query('UPDATE invoices SET amt=$1, paid=$2, paid_date=$3 WHERE id=$4 RETURNING id, comp_code, amt, paid, add_date, paid_date', [amt, paid, paidDate, id]);

        const currResult = await db.query('SELECT paid FROM invoices WHERE id = $1', [id]);

        const currPaidDate = currResult.rows[0].paid_date;
        if (!currPaidDate && paid) {
            paidDate = new Date();
        } else if (!paid) {
            paidDate = null;
        } else {
            paidDate = currPaidDate; 
        };

        if (results.rows.length === 0) {
            throw new ExpressError(`Cant update invoice with id: ${id}`);
        };
        return res.json({ invoice: results.rows[0] });
    } catch (e) {
        return next(e);
    }
});


router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const results = await db.query('DELETE FROM invoices WHERE id=$1', [id])
        return res.json({ msg: 'Invoice has been deleted' });
    } catch(e){
        return next(e);
    };
})
module.exports = router;