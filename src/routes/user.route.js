import { Router } from 'express';
const router = Router();
import { getProductPrice } from '../controllers/user.controller.js';

router.get('/price/:userId/:productName', getProductPrice);

export default router;