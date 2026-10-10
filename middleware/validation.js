import { body, validationResult } from 'express-validator';
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
                return res.status(400).json({ msg: firstMsg[0] });
            }
            next();

        }
    ]
};

export const paramValidation = validateData([
    param('id').custom(async (value) => {
        const isValidId = mongoose.Types.ObjectId.isValid(value);
        if (!isValidId) throw new CustomError(400, "Bad request");
        const user = await User.findById(value);
        if (!user) throw new CustomError(404, "Product not found");

    }),
])



export const registerValidation = validateData([
    body('name').notEmpty().withMessage('Name is required')
    .isLength({ max: 100 }).withMessage('Name is too long'),
    body('email').notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Invalid email adress').custom(async (value) => {
        const user = await User.findOne({ email: value });
        if (user) throw new CustomError(400, 'Email already exist');
    })
    .isLength({ max: 100 }).withMessage('Email is too long'),
    body('password').notEmpty().withMessage('Password is required')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
    .isLength({ max: 100 }).withMessage('Password is too long'),

]);

export const loginValidation = validateData(
    [
        body('email').notEmpty().withMessage('Email is required').isEmail().custom(async (value) => {
            const user = await User.findOne({ email: value });
            if (!user) throw new CustomError(400, 'Email not exist');
        }),
        body('password').notEmpty().withMessage('Password is required'),
    ]
);


export const clientMsgValidation = validateData(
    [
        body('name').notEmpty().withMessage('Product name is required')
        .isLength({ max: 100 }).withMessage('Name is too long'),
        body('email').notEmpty().withMessage('Email is required')
        .isLength({ max: 100 }).withMessage('Email is too long'),
        body('phone').notEmpty().withMessage('Phone number is required')
        .isLength({ max: 50 }).withMessage('Phone is too long'),
        body('clientMsg').notEmpty().withMessage('Message can not be empty')
        .isLength({max : 1000 }).withMessage('Message is too long'),

    ]
);

export const resetValidation = validateData([
    body('otp').notEmpty().withMessage('Otp is required'),
    body('password').notEmpty().withMessage('Password is required').isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .isLength({ max: 100 }).withMessage('Password is too long'),

]);


