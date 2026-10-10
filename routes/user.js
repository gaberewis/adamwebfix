import { Router } from 'express';
import { registerValidation, loginValidation, 
    clientMsgValidation, resetValidation} from '../middleware/validation.js';
import {userPayload } from '../middleware/funcs.js';
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
router.post('/register', registerValidation,  registerUser);
router.post('/login', loginValidation, login);
router.get('/logout',  logout);
router.get('/client-msg', getClientRequest);
router.post( '/client-msg', clientMsgValidation, clientMsg);
router.post('/edit-user/:id', editUser);
router.get('/getuser', userPayload, currentUser);
router.post('/forget-password', forgetPassword);
router.post('/reset-password', resetValidation, resetPassword)



export default router;