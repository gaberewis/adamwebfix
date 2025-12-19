import { Router } from 'express';
import { registerValidation, loginValidation } from '../middleware/validation.js';
import {
    registerUser,
    login,
    logout,  
} from '../controllers/auth.js';

import { getUser } from '../middleware/funcs.js';


const router = Router();

router.post('/register', registerValidation, registerUser);
router.post('/login', loginValidation, login);
router.get('/current', getUser);
router.get('/logout', logout);


export default router;