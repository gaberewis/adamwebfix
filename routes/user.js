import { Router } from "express";
import {  getAllUseres, findCurrentUser, updateUser, getAppStats} from '../controllers/user.js';
import { updateUserValidation } from '../middleware/validation.js';
import { authenticateAdmin }  from  '../middleware/funcs.js';
import upload from "../middleware/multer.js";
import { checkIsDemo } from '../controllers/auth.js';

const router = Router();

router.get('/current', findCurrentUser);
router.get('/app-stats',authenticateAdmin('admin'), getAppStats);
router.route('/').get(getAllUseres).patch( checkIsDemo, upload.single('avatar'), updateUserValidation,  updateUser);

export default router;



