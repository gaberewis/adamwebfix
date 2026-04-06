import { Router } from 'express';
import { registerValidation, loginValidation, clientMessage} from '../middleware/validation.js';
import {
    registerUser,
    login,
    logout,  
    currentUser, 
    homeFormFunc
} from '../controllers/auth.js';
import { authenticateUser } from '../middleware/funcs.js';


const router = Router();
router.get('/current', authenticateUser, currentUser);
router.get('/clientform', getClientRequest);
router.get('/logout', authenticateUser, logout);
router.post('/register', registerValidation, registerUser);
router.post('/login', loginValidation, login);
router.post('/cleintform', clientMessage, homeFormFunc);




export default router;