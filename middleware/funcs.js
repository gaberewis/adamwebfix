import "dotenv/config";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import nodemailer from "nodemailer";
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






const createTransporter = () => {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    family: 4,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
    connectionTimeout: 30000,
    greetingTimeout: 30000,
    socketTimeout: 30000,
    debug: process.env.NODE_ENV === 'development',
  });
};

let transporter = createTransporter();

export const sendEmail = async (to, subject, message, retries = 3) => {
  console.log("EMAIL_USER exists:", !!process.env.EMAIL_USER);
  console.log("EMAIL_PASSWORD exists:", !!process.env.EMAIL_PASSWORD);

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      // Verify connection
      await transporter.verify();
      console.log("SMTP connection successful");

      // Send email
      const info = await transporter.sendMail({
        from: `"AdamWebFix" <${process.env.EMAIL_USER}>`,
        to,
        subject,
        html: message,
      });

      console.log("Email sent successfully:", info.messageId);
      return info;
    } catch (error) {
      console.error(`SMTP ERROR (attempt ${attempt}/${retries}):`, error);

      if (attempt === retries) {
        throw error;
      }

      // Wait before retry (exponential backoff)
      await new Promise(resolve => setTimeout(resolve, 2000 * attempt));
      
      // Recreate transporter on failure
      transporter = createTransporter();
    }
  }
};

// Verify transporter on startup
const verifyTransporter = async () => {
  try {
    await transporter.verify();
    console.log('Transporter verified successfully');
  } catch (error) {
    console.error('Transporter verification failed:', error);
    // Try to recreate
    transporter = createTransporter();
  }
};

verifyTransporter();