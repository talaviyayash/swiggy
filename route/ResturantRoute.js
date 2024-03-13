import { CreateResturant , LoginResturant  ,FetchAll,UpdateResturant,FeatchResturant , DeleteResturant,RefreshTokenEndPoint } from '../controller/ResturantCtrl.js';
import { upload} from '../middleware/multerMiddleware.js'
import { Router } from 'express';

const router = Router();
router.route('/signup').post(upload.fields([
    {
        name : 'restaurant',
        maxCount : 4
    }
]),CreateResturant)
router.route('/signin').post(LoginResturant)
router.route('/fetchall').get(FetchAll)
router.route('/update').post(upload.fields([
    {
        name : 'restaurant',
        maxCount : 2
    }
]),UpdateResturant)
router.route('/allapproved').get(FeatchResturant)
router.route('/delete').post(DeleteResturant)
router.route('/refresh').post(RefreshTokenEndPoint)



export default router