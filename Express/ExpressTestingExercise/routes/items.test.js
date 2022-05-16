process.env.NODE_ENV = 'test'; 

const req = require('express/lib/request');
const request = require('supertest')

const app = require('../app');
let items = require('../fakeDb');

let ginger = { name: "ginger", price: 3.13 }; 

beforeEach(function() {
    items.push(ginger);
  });
  
  afterEach(function() {
    // make sure this *mutates*, not redefines, `cats`
    items.length = 0;
  });
  // end afterEach

describe('GET, /items', () => {
    test('Get all items', async () => {
        const res = await request(app).get('/items');
        expect(res.statusCode).toBe(200)
        expect(res.body).toEqual({ items: [ginger] });
    });
});

describe('GET, /items/:name', () => {
    test('Get a single item', async () => {
        const res = await request(app).get(`/items/${ginger.name}`)
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ item: ginger });
    })
}); 

// describe('POST, /items', () => {
//     test('Create a new item', async () => {
//         const res = await request(app).post('/items').send({ name: 'Bananas', price: 2.99 });
//         expect(res.statusCode).toBe(201);
//         expect(res.body).toEqual({ item: { name: 'Bananas', price: 2.99 } });
//     });
// });


describe('PATCH, /items', () => {
    test('Editing an item', async () => {
        const res = await request(app).patch(`/items/${ginger.name}`).send({ name: 'Tumeric' })
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ item: { name: 'Tumeric', price: 3.13 } });
    }); 
})

describe('Delete, /items', () => {
    test('Deleting an item', async () => {
        const res = await request(app).delete(`/items/${ginger.name}`)
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ message: 'Deleted' });
    });
});