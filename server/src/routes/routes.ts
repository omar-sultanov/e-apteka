import {Router} from 'express';
const router = Router();

import {getProducts } from '../controllers/product.controller';


router.post('/products', getProducts);

export default router;