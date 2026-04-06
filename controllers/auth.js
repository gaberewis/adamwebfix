
import User from '../models/User.js';
import Homeform from '../models/Homeform.js';
import { hashPassword, comparePassword } from '../middleware/funcs.js';
import { createToken, varifyToken } from '../middleware/funcs.js';
import { CustomError } from '../middleware/errorHandler.js';


export const registerUser = async (req, res) => {
    req.body.password = await hashPassword(req.body.password);
    const user = await User.create(req.body);
    res.status(201).json({ msg: 'user registred', user });
};

export const login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    const validPassword = await comparePassword(req.body.password, user.password);
   if (!validPassword) throw new CustomError(400, 'wrong password');
   
    const token = createToken({ userId: user._id, userRole: user.role, userName : user.name });
 
    res.cookie(
        'token', token, {
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
        secure: process.env.NODE_ENV === 'production',
    }
    );

    res.status(201).json({ msg: 'user logged in' });
};




export const currentUser = async(req, res)=>{
   

     const user = await User.findOne({ _id: req.user.userId });

 
    res.status(200).json({ user });
}




export const logout = (req, res) => {
    res.clearCookie('token', {httpOnly : true});
    res.status(200).json({msg : 'user logged out!'});
   
};

export const homeFormFunc = async(req, res)=>{

    const homeFormData = await Homeform.create(req.body);
    res.status(201).json({msg : 'client request created '});

};

export const getClientRequest = async(req, res)=>{
    
    const clientFormData = await Homeform.find({});
    res.status(200).json({data : clientFormData});

}