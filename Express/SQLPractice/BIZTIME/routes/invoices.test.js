process.env.NODE_ENV = 'test';

const request = require('supertest');
const app = require('../app');
const db = require('../db');
const ExpressError = require('../expressError');


let testCompany; 
let testInvoice;

beforeEach(async () => {
    const companyResult = await db.query(`INSERT INTO companies (code, name, description) VALUES ('apple', 'Apple', 'Fruit Logo Company that owns the freeworld!!') 
    RETURNING code, name, description`);
    testCompany = companyResult.rows[0];
    const invoiceResult = await db.query(`INSERT INTO invoices (comp_code, amt, paid, paid_date) VALUES ('apple', 2997, false, null) RETURNING id, comp_code, amt, paid, add_date, paid_date`);
    testInvoice = invoiceResult.rows[0];
});


afterEach(async () => {
    await db.query('DELETE FROM companies');
    await db.query('DELETE FROM invoices');
});

afterAll(async () => {
    await db.end();
});

describe('GET /', () => {
    test('Return a list of a single invoice', async () => {
        const res = await request(app).get('/invoices');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([[testInvoice]]);
    })
})

describe('GET /:id', () => {
    test('Get invoice by id', async () => {
        const res = await request(app).get(`/invoices/${testInvoice.id}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ invoice: testInvoice, company: testCompany });
    })
});


describe('POST /', () => {
    test('Create new invoice', async () => {
        const res = await request(app).post('/invoices').send({ id: 6, comp_code: 'apple', amt: 34567, paid: false, add_date: new Date(), paid_date: null });
        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual({ invoice: {id: 6, comp_code: 'apple', amt: 34567, paid: false, add_date: new Date(), paid_date: null } });
    });
})


describe('PUT /:id', () => {
    test('Update an amt for an invoice', async () => {
        const res = await request(app).put(`/invoices/${testInvoice.id}`).send({ amt: 432111 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ invoice: testInvoice, company: testCompany });
    })
});


describe('DELETE /:id', () => {
    test('Delete an invoice by id', async () => {
        const res = await request(app).delete(`/invoices/${testInvoice.id}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ msg: 'Invoice has been deleted' });
    })
})