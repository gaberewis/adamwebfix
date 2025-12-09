import User from '../models/User.js';
import Proudct from '../models/Proudct.js';
import cloudinary from 'cloudinary';
import { formatImage } from '../middleware/multer.js';


export const getAllUseres = async (req, res) => {

  const users = await User.find({});
  res.status(200).json({ users });
};

export const findCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  res.status(200).json({ user });
};



export const updateUser = async (req, res) => {
  const newUser = { ...req.body };
  delete newUser.password;
  if (req.file) {
   
    const response = await cloudinary.v2.uploader.upload(formatImage(req.file));

    newUser.avatar = response.secure_url;
    newUser.avatarPublicId = response.public_id;
  }
  const updatedUser = await User.findByIdAndUpdate(req.user.userId, newUser);

  if (req.file && updatedUser.avatarPublicId) {
    await cloudinary.v2.uploader.destroy(updatedUser.avatarPublicId);
  }
  res.status(200).json({ msg: 'update user' });
};



export const getAppStats = async (req, res) => {

  const users = await User.countDocuments();
  const Proudcts = await Proudct.countDocuments();
  res.status(200).json({ users, Proudcts });

}




