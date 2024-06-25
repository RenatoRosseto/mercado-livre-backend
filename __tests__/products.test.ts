import request from 'supertest';
import app from '../src/app';

describe('GET /api/products', () => {
  it('should return products based on search query', async () => {
    const response = await request(app).get('/api/products?search=iphone');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('query');
    expect(response.body).toHaveProperty('categories');
    expect(response.body).toHaveProperty('products');
  });
});