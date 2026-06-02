import { Router } from 'express';
import { registerValidation, loginValidation, clientMsgValidation} from '../middleware/validation.js';
import {
    registerUser,
    login,
    logout,  
   clientMsg,
    getClientRequest
} from '../controllers/auth.js';
import { authenticateUser } from '../middleware/funcs.js';


const router = Router();
router.post('/register', registerValidation, registerUser);
router.post('/login', loginValidation, login);
router.get('/logout', authenticateUser, logout);
router.get('/clientmsg', getClientRequest);
router.post( '/clientmsg', clientMsgValidation, clientMsg);





export default router;