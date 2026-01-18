import { Router } from 'express';
import { registerValidation, loginValidation } from '../middleware/validation.js';
import {
    registerUser,
    login,
    logout,  
    currentUser
} from '../controllers/auth.js';
import { authenticateUser } from '../middleware/funcs.js';


const router = Router();
router.get('/current', authenticateUser, currentUser);
router.get('/logout', authenticateUser, logout);
router.post('/register', registerValidation, registerUser);
router.post('/login', loginValidation, login);




export default router;