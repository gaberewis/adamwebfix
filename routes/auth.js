import { Router } from 'express';
import { registerValidation, loginValidation } from '../middleware/validation.js';
import {
    registerUser,
    login,
    logout,  
} from '../controllers/auth.js';

import { getUser } from '../middleware/funcs.js';


const router = Router();
router.get('/current', getUser);
router.get('/logout', logout);
router.post('/register', registerValidation, registerUser);
router.post('/login', loginValidation, login);




export default router;