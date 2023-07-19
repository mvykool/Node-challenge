import { Router } from 'express';
import { getProductPrice } from '../controllers/client.controller.js';

const router = Router();

router.get('/price/:user_id/:nombre_producto', getProductPrice);

export default router;