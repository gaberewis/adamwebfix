import User from '../models/User.js';
import Page from '../models/Page.js';
import ClientMsg from '../models/ClientMsg.js';
import { createToken,
   hashPassword, 
   comparePassword, 
   sendEmail } from '../middleware/funcs.js';
import { CustomError } from '../middleware/errorHandler.js';




export const registerUser = async (req, res) => {
  req.body.password = await hashPassword(req.body.password);

  try {
    const user = await User.create(req.body);

    res.status(201).json({
      msg: 'user registered and logged in',
    });
  } catch (error) {
    console.error('Register Error', error);
  }

};

export const login = async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    throw new CustomError(400, 'Email and password required');
  }

  const user = await User.findOne({ email });
  if (!user) throw new CustomError(401, 'Invalid credentials');

  const validPassword = await comparePassword(password, user.password);
  if (!validPassword) throw new CustomError(401, 'Invalid credentials');

  const token = createToken({
    userId: user._id,
    userRole: user.role,
    userName: user.name,
    userEmail : user.email
  });

  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
  });

  res.status(200).json({ msg: 'User logged in successfully' });
};


export const clientMsg = async (req, res) => {

  const homeFormData = await ClientMsg.create(req.body);
  res.status(201).json({ msg: 'client request created ' });

};

export const getClientRequest = async (req, res) => {
  try {
    const clientFormData = await ClientMsg.find({}).sort({ createdAt: -1 });
    res.status(200).json({ data: clientFormData });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const currentUser = async (req, res) => {

   const user = req.user || null;

   const pages = await Page.find({userid : user.userId }).sort({createdAt : -1});
   
  res.status(201).json({ user, pages });

};


export const editUser = async(req, res)=> {
let newUser = req.body;
if(!newUser.password) {delete newUser.password;}else{
newUser.password = await hashPassword(newUser.password );

}
 

const updateUser = await User.findByIdAndUpdate(req.params.id, newUser, {new : true});
res.status(200).json({
    msg: "user updated",
    user: updateUser
});

}



import { randomInt } from "node:crypto";

export const forgetPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "Email does not exist",
      });
    }

    const otp = randomInt(1000, 10000);

    await sendEmail({
      to: user.email,
      subject: "Reset Your Password",
      html: `
        <h5>Hello ${user.name},</h5>
        <p>Your OTP code is: <b>${otp}</b></p>
        <p>This code will expire in 15 minutes.</p>
        <p>
          <a href="https://adamwebfix.com/reset-password">
            Click here to reset your password
          </a>
        </p>
      `,
    });

    user.otp = otp;
    user.otpExpires = Date.now() + 15 * 60 * 1000;
    await user.save();

    return res.status(200).json({
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Forgot password error:", {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      code: error.code,
    });

    return res.status(500).json({
      message: "Unable to send reset email. Please try again later.",
    });
  }
};




export const resetPassword = async (req, res) => {
  const otp = req.body.otp;
  const user = await User.findOne({ otp });
  console.log(otp);

  if (!user)
    throw new CustomError(401, 'wrong otp');

  if (user.otpExpires < Date.now()) throw new CustomError(401, 'Otp has expired');
  const password = req.body.password = await hashPassword(req.body.password);
  await User.findOneAndUpdate({ otp }, { password, otp: '' });
  res.status(201).json({ msg: "password has been updated" });

};


export const logout = (req, res) => {
  res.clearCookie('token', { httpOnly: true });
  res.status(200).json({ msg: 'user logged out!' });
};