import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import { CustomError } from "./errorHandler.js";

export const hashPassword = async (password) => {

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = bcrypt.hash(password, salt);
  return hashedPassword;

};

export const comparePassword = async (password, hashedPassword) => {
  const comparedPassword = await bcrypt.compare(password, hashedPassword);
  return comparedPassword;
};

export const createToken = (payload) => {

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });
  return token;
};

export const verifyToken = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  return decoded;
};

export const getUser = (req, res, next) => {
  const { token } = req.cookies;
  
  const { userId, userRole, userName } = verifyToken(token);
  req.user = { userId, userRole, userName};


next();

}

export const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new CustomError(401, 'authentication invalid ....');
  const { userId, userRole, userName } = verifyToken(token);
 // const isDemo = userId === '68f29702a2e57c84a596d70e';
  req.user = { userId, userRole, userName};

  next();
}

export const authenticateAdmin = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.userRole)) {
      throw new CustomError(403, 'Unauthorized to access this route');
    }
    next();
  };
};