import { Router } from 'express';
import { searchProductsController } from '../controllers/productsController';

const router = Router();

router.get('/', searchProductsController);

export default router;
