import { Router } from 'express';
import { registerValidation, 
    clientMsgValidation, resetValidation} from '../middleware/validation.js';
import {userPayload, authenticateUser } from '../middleware/funcs.js';
import {
    registerUser,
    login,
    logout,  
   clientMsg,
    getClientRequest, 
    currentUser,
    editUser,
    forgetPassword, resetPassword,
} from '../controllers/user.js';



const router = Router();
router.get('/client-msg', getClientRequest);
router.get('/getuser', authenticateUser, userPayload,  currentUser);
router.post('/register', registerValidation,  registerUser);
router.post('/login',  login);
router.post('/logout', authenticateUser, logout);
router.post( '/client-msg', clientMsgValidation, clientMsg);
router.post('/forget-password', forgetPassword);
router.patch('/reset-password', resetValidation, resetPassword)
router.patch('/edit-user/:id', authenticateUser, editUser);



export default router;