process.env.NODE_ENV = 'test'; 

const request = require('supertest')

const app = require('../app');
let cats = require('../fakeDb');

let pickles = { name: "Pickles" };

beforeEach(function() {
  cats.push(pickles);
});

afterEach(function() {
  // make sure this *mutates*, not redefines, `cats`
  cats.length = 0;
});
// end afterEach


describe("GET /cats", () => {
    test('Get all cats', async () => {

        const res = await request(app).get('/cats');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ cats: [pickles] });
    });
}); 

describe("GET /cats/:name", () => {
    test('Get cat by name', async () => {

        const res = await request(app).get(`/cats/${pickles.name}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ cat: pickles });
    });
    test('Returning 404 for invalid cat name', async () => {

        const res = await request(app).get(`/cats/piggles`);
        expect(res.statusCode).toBe(404);
        
    });
}); 


describe("POST /cats", () => {
    test('Creating a cat', async () => {
        const res = await request(app).post('/cats').send({ name: 'Blue' });
        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual({cat: {name: 'Blue'}}); 
    });

    test('Responds with 400 if name is missing', async () => {
        const res = await request(app).post('/cats').send({});
        expect(res.statusCode).toBe(400);
        
    });


}); 

describe('PATCH /cats', () => {
    test('Editing a cat', async () => {
        const res = await request(app).patch(`/cats/${pickles.name}`).send({ name: 'Monster' }); 
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ cat: { name: 'Monster' } }); 
    })
    test('Responds with 404 for invalid cat name', async () => {
        const res = await request(app).patch(`/cats/piggles`).send({ name: 'Monster' }); 
        expect(res.statusCode).toBe(404);
        
    })

   
})


describe('DELETE /cats/:name', () => {
    test('Deleting a cat', async () => {
        const res = await request(app).delete(`/cats/${pickles.name}`)
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ message: 'Deleted' });
    });

    test('Deleting an invalid cat', async () => {
        const res = await request(app).delete(`/cats/piggles`)
        expect(res.statusCode).toBe(404);
        
    });

    
});

