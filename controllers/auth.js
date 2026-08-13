
import User from '../models/User.js';
import ClientMsg from '../models/ClientMsg.js';
import { hashPassword, comparePassword } from '../middleware/funcs.js';
import { createToken, verifyToken } from '../middleware/funcs.js';
import { CustomError } from '../middleware/errorHandler.js';
import sgMail from '@sendgrid/mail';

  sgMail.setApiKey('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');


export const registerUser = async (req, res) => {
  req.body.password = await hashPassword(req.body.password);

  const user = await User.create(req.body);

  // Create token
  const token = createToken({
    userId: user._id,
    userRole: user.role,
    userName: user.name,
  });

  // Set cookie
  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    secure: process.env.NODE_ENV === 'production',
  });

  res.status(201).json({
    msg: 'user registered and logged in',
  });
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const validPassword = await comparePassword(req.body.password, user.password);
  if (!validPassword) throw new CustomError(400, 'wrong password');

  const token = createToken({ userId: user._id, userRole: user.role, userName: user.name });

  res.cookie(
    'token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    secure: process.env.NODE_ENV === 'production',
  }
  );

  res.status(201).json({ msg: 'user logged in' });
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

  res.status(200).json({ userId: req.user.userId });

}

export const forgetPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new CustomError(401, 'email not exist');
    return;
  }
  const otp = Math.floor(1000 + Math.random() * 9000);
  const createdOtp = await User.findOneAndUpdate(
    { email },
    {
      otp,
      otpExpires: Date.now() + 15 * 60 * 1000 // 15 minutes
    },
    { new: true }
  );

  //send otp by email
     const emailData = {
                  to: `${user.email}`,
                  from: 'noreply@adam-estore.com',
                  subject: `Reset Password`,
                  html: `
                              <h5>Dear ${user.name} :  </h5>
                             
                              <h5>Your Otp Code is : ${otp}</h5>
                              <a href="https://adam-estore.com/resetpassword" >Reset your password.</a>
                          `
              };
  
              sgMail.send(emailData);

  res.status(201).json({ msg: "otp has been created" });

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