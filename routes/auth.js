import { Router } from 'express';
import { registerValidation, loginValidation, clientMsgValidation} from '../middleware/validation.js';
import {
    registerUser,
    login,
    logout,  
   clientMsg,
    getClientRequest, 
    currentUser,
} from '../controllers/auth.js';
import { authenticateUser, getUser } from '../middleware/funcs.js';


const router = Router();
router.post('/register', registerValidation,  registerUser);
router.post('/login', loginValidation, login);
router.get('/logout', authenticateUser, logout);
router.get('/clientmsg', getClientRequest);
router.post( '/clientmsg', clientMsgValidation, clientMsg);
router.get('/user', getUser, authenticateUser, currentUser);



export default router;