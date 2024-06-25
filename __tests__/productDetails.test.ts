import request from 'supertest';
import app from '../src/app';

describe('GET /api/productDetails/:id', () => {
  it('should return product details based on product ID', async () => {
    const response = await request(app).get('/api/productDetails/MLB3394562837');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('categories');
    expect(response.body).toHaveProperty('product');
  });
});