import { CreateUser,LoginUser} from '../controller/userCtrl.js';
import { Router } from 'express';

const router = Router();
router.route('/signup').post(CreateUser)
router.route('/signin').post(LoginUser)


export default router