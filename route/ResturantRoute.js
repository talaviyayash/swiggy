import { CreateResturant , LoginResturant} from '../controller/ResturantCtrl.js';
import { Router } from 'express';

const router = Router();
router.route('/signup').post(CreateResturant)
router.route('/signin').post(LoginResturant)


export default router