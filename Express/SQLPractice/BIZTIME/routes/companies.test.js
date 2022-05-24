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
    test('Get a list with one company', async () => {
        const res = await request(app).get('/companies');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ companies: [[testCompany]] });
    });
});


describe('GET /:code', () => {
    test('Get a company by a code', async () => {
        const res = await request(app).get(`/companies/${testCompany.code}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ company: testCompany, invoices: [[testInvoice]] });
    });
    test('Responds with a 404 from invalid code', async () => {
        const res = await request(app).get(`/companies/blue`);
        expect(res.statusCode).toBe(404);
    });


})


describe('POST /', () => {
    test('Create a company', async () => {
        const res = await request(app).post('/companies').send({ name: 'Disney', description: 'The Walt Disney Company' } );
        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual({ company: { code: 'disney', name: 'Disney', description: 'The Walt Disney Company' } }); 
    })
})


describe('PATCH /:code', () => {
    test('Update a company', async () => {
        const res = await request(app).patch(`/companies/${testCompany.code}`).send({ name: 'Universal', description: 'Orlandos second best theme park' });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ company: { code: testCompany.code, name: 'Universal', description: 'Orlandos second best theme park' } });
    })
    test('Responds with 404 from invalid code ', async () => {
        const res = await request(app).patch(`/companies/wrongcode`).send();
        expect(res.statusCode).toBe(404);
        
    })
})


describe('DELETE /:code', () => {
    test('Delete a single company', async () => {
        const res = await request(app).delete(`/companies/${testCompany.code}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ msg: 'Deleted Company' });
    })
})