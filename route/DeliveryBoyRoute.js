import { CreateDeliveryBoy , LoginDeliveryBoy} from '../controller/DeliveryBoyCtrl.js';
import { Router } from 'express';

const router = Router();
router.route('/signup').post(CreateDeliveryBoy)
router.route('/signin').post(LoginDeliveryBoy)


export default router