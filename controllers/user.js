import User from '../models/User.js';
import Page from '../models/Page.js';
import ClientMsg from '../models/ClientMsg.js';
import {
  createToken,
  hashPassword,
  comparePassword,
  sendEmail
} from '../middleware/funcs.js';
import { CustomError } from '../middleware/errorHandler.js';


export const registerUser = async (req, res) => {

  req.body.password = await hashPassword(req.body.password);

  try {
    const user = await User.create(req.body);
    res.status(201).json({
      msg: 'user registered ',
    });
  } catch (error) {
    console.error('Register Error', error);
  }
};


export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user.status === "blocked") throw new
    CustomError(401, 'Your account has been blocked. Please contact us for further clarification.');

  const validPassword = await comparePassword(password, user.password);
  if (!validPassword) throw new CustomError(401, 'Invalid credentials');

  const token = createToken({
    userId: user._id,
    userRole: user.role,
    userName: user.name,
    userEmail: user.email
  });

  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
  });
  res.status(200).json({ msg: 'User logged in successfully' });
};



export const currentUser = async (req, res) => {
  const user = req.user 
  const pages = await Page.find({ userid: user.userId }).sort({ createdAt: -1 });
  res.status(200).json({ user, pages  });
};



export const editUser = async (req, res) => {
  const { name, email, password } = req.body;
  const updatedData = {name, email}
  const id = req.params.id;
  if (password) { delete newUser.password; } else {
    updatedData.password = await hashPassword(newUser.password);
  }
  const updateUser = await User.findByIdAndUpdate(id, updatedData, 
    { new: true, runValidators : true }).select('-password');
  if(!updateUser) throw new CustomError(404, 'User not found');
  res.status(200).json({
    msg: "user updated",
    user: updateUser
  });

}


export const forgetPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "Email does not exist",
      });
    }

    const otp = randomInt(100000, 1000000);

    user.otp = otp;
    user.otpExpires = Date.now() + 15 * 60 * 1000;
    await user.save();

    await sendEmail({
      to: user.email,
      subject: "Reset Your Password",
      html: `
        <h5>Dear Customer,</h5>
        <p>Your OTP code is: <b>${otp}</b></p>
        <p>This code will expire in 15 minutes.</p>
        <p>
          <a href="https://adamwebfix.com/reset-password">
            Click here to reset your password
          </a>
        </p>
      `,
    });

  
    return res.status(200).json({
       msg: "If the email exists, a reset code will be sent.",
    });
  } catch (error) {
    console.error("Forgot password error:", {
      msg: error.message,
    });

    return res.status(500).json({
      msg: "Unable to send reset email. Please try again later.",
    });
  }
};


export const resetPassword = async (req, res) => {
  const user = await User.findOne({ otp : req.body.otp});
  if (!user) throw new CustomError(401, 'wrong otp');
  if (!user.otpExpires || user.otpExpires  < Date.now()) throw new CustomError(401, 'Otp has expired');
  const password =  await hashPassword(req.body.password);
  user.password = password;
  user.otp = '';
  user.otpExpires = null;
  await user.save();
  res.status(200).json({ msg: "password has been updated" });
};



export const logout = (req, res) => {
 res.cookie('token', token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict',
});
};

export const clientMsg = async (req, res) => {
   await ClientMsg.create(req.body);
  res.status(201).json({ msg: 'client request created' });
};

export const getClientRequest = async (req, res) => {
  try {
    const clientFormData = await ClientMsg.find().sort({ createdAt: -1 });
    res.status(200).json({ data: clientFormData });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};