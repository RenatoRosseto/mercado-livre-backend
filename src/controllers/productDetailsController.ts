import { Request, Response } from 'express';
import { getProductDetails } from '../services/productDetailsService';

export const productDetailsController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await getProductDetails(id);
    res.json(result);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message || 'An unknown error occurred' });
  }
};
