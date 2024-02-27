import {CreateProduct} from '../controller/ProductCtrl.js';
import { Router } from 'express';

const router = Router();
router.route('/create').post(CreateProduct)


export default router