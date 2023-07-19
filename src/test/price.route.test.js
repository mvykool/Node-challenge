import request from 'supertest';
import app from '../app.js';

describe('GET /price/:user_id/:nombre_producto', () => {
    test('responds with JSON for user 1 and special price', async() => {
        const expectedResponse = {
            specialPrice: 79.99,
        };

        const response = await request(app).get('/price/1/Adidas%20Stan%20Smith');

        expect(response.status).toBe(200);
        expect(response.type).toMatch(/json/);
        expect(response.body).toEqual(expectedResponse);
    });

    test('responds with JSON for user 2 and base price', async() => {
        const expectedResponse = {
            basePrice: 99.99,
        };

        const response = await request(app).get('/price/2/Adidas%20Stan%20Smith');

        expect(response.status).toBe(200);
        expect(response.type).toMatch(/json/);
        expect(response.body).toEqual(expectedResponse);
    });
});