import { body, validationResult } from 'express-validator';
import Proudct from '../models/Proudct.js';
import mongoose from 'mongoose';
import { param } from 'express-validator';
import User from '../models/User.js';
import { CustomError } from './errorHandler.js';


const validateData = (validationArray) => {
    return [
        validationArray,
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const firstMsg = errors.array().map(error => error.msg);
                return res.status(400).json({ msg : firstMsg[0]});
            }
            next();

        }
    ]
};

export const paramValidation = validateData([
    param('id').custom(async (value, { req }) => {

        const isValidId = mongoose.Types.ObjectId.isValid(value);
        if (!isValidId) throw new CustomError(400, "bad request");
        const Proudct = await Proudct.findById(value);
        if (!Proudct) throw new CustomError(404, "Proudct not found");
        const isCreator = req.user.userId = Proudct.createdBy;
        const isAdmin = req.user.userRole = 'admin';
        if (!isCreator && !isAdmin) throw new CustomError(401, 'not authorized to access this route');

    }),
])

export const createProudctValidation = validateData(
    [
        body('company').notEmpty().withMessage('company is required'),
        body('position').notEmpty().withMessage('position is required'),
        body('ProudctLocation').notEmpty().withMessage('Proudct location is required'),
        // body('ProudctStatus').isIn(['interview', 'declined', 'pending']).withMessage('invalid Proudct status'),
        // body('ProudctType').isIn(['full-time', 'part-time', 'internship']).withMessage('invalid Proudct type'),
    ]
);

export const registerValidation = validateData([
    body('name').notEmpty().withMessage('name is required'),
    body('lastName').notEmpty().withMessage('last name is required'),
    body('email').notEmpty().withMessage('email is required').isEmail().withMessage('invalid email adress').custom(async (value) => {
        const user = await User.findOne({ email: value });
        if (user) throw new CustomError(400, 'email already exist');
    }),
    body('password').notEmpty().withMessage('password is required').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
    body('location').notEmpty().withMessage('location is required'),

]);

export const loginValidation = validateData(
    [
        body('email').notEmpty().withMessage('email is required').isEmail().custom(async (value) => {
            const user = await User.findOne({ email: value });
            if (!user) throw new CustomError(400, 'email not exist');
        }),
        body('password').notEmpty().withMessage('password is required'),
    ]
);


export const updateUserValidation = validateData([
     body('name').notEmpty().withMessage('name is required'),
     body('email').notEmpty().withMessage('email is required').isEmail().withMessage('invalid email adress').custom(async(value , { req })=>{
const user = await User.findOne({email : value});
if(user && user._id.toString() !== req.user.userId ) throw new CustomError(400, 'email already exist');
     }),
       body('lastName').notEmpty().withMessage('last name is required'),
         body('location').notEmpty().withMessage('location is required'),

]);