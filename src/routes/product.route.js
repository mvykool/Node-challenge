import { Router } from 'express';
const router = Router();
import { getInStockProducts } from '../controllers/product.controller.js';

router.get('/products', getInStockProducts);

export default router;