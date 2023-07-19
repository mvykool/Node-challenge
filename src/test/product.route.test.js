import request from 'supertest';
import app from '../app.js';

describe('GET /products', () => {
    it('should retrieve products with existencia not equal to 0', async() => {
        const response = await request(app)
            .get('/products')
            .expect('Content-Type', /json/)
            .expect(200);

        response.body.forEach(product => {
            expect(product.existencia).not.toBe(0);
        });
    });
});