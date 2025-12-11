import { Router } from 'express';
import { registerValidation, loginValidation } from '../middleware/validation.js';
import {
    registerUser,
    login,
    logout,  
} from '../controllers/auth.js';

import { authenticateUser } from './middleware/funcs.js';


const router = Router();

router.post('/register', registerValidation, registerUser);
router.post('/login', loginValidation, login);
router.get('/current', authenticateUser, currentUser);
router.get('/logout', logout);


export default router;