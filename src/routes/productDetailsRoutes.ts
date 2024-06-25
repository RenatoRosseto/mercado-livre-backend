import { Router } from 'express';
import { productDetailsController } from '../controllers/productDetailsController';

const router = Router();

router.get('/:id', productDetailsController);

export default router;
