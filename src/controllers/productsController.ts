import { Request, Response } from 'express';
import { searchProducts } from '../services/productsService';

export const searchProductsController = async (req: Request, res: Response) => {
  try {
    const { search } = req.query;
    if (!search) {
      return res.status(400).json({ error: 'Search query is required' });
    }

    const result = await searchProducts(search as string);
    res.json(result);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message || 'An unknown error occurred' });
  }
};
