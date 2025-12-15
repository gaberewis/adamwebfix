import { body, validationResult } from 'express-validator';
import Product from '../models/Product.js';
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
    param('id').custom(async (value) => {

        const isValidId = mongoose.Types.ObjectId.isValid(value);
        if (!isValidId) throw new CustomError(400, "bad request");
        const product = await Product.findById(value);
        if (!product) throw new CustomError(404, "Product not found");
    
    }),
])

export const createProductValidation = validateData(
    [
        body('name').notEmpty().withMessage('Name is required'),
       // body('position').notEmpty().withMessage('position is required'),
       // body('ProductLocation').notEmpty().withMessage('Product location is required'),
        // body('productstatus').isIn(['interview', 'declined', 'pending']).withMessage('invalid Product status'),
        // body('ProductType').isIn(['full-time', 'part-time', 'internship']).withMessage('invalid Product type'),
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


