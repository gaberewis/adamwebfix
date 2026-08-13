import { Router } from 'express';
import { registerValidation, loginValidation, clientMsgValidation, resetValidation} from '../middleware/validation.js';
import { authenticateUser, getUser, } from '../middleware/funcs.js';
import {
    registerUser,
    login,
    logout,  
   clientMsg,
    getClientRequest, 
    currentUser,
    forgetPassword, resetPassword,
} from '../controllers/auth.js';



const router = Router();
router.post('/register', registerValidation,  registerUser);
router.post('/login', loginValidation, login);
router.get('/logout', authenticateUser, logout);
router.get('/clientmsg', getClientRequest);
router.post( '/clientmsg', clientMsgValidation, clientMsg);
router.get('/user', getUser, authenticateUser, currentUser);
router.post('/forgetpassword', forgetPassword);
router.post('/resetpassword', resetValidation, resetPassword)



export default router;