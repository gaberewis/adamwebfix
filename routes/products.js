import { Router } from 'express';
import { createProductValidation, paramValidation } from '../middleware/validation.js';
import {
    getproducts,
    craeteProduct,
    getProduct,
    updateProduct,
    deleteProduct,
} from '../controllers/products.js';
import upload from '../middleware/multer.js';
import { authenticateUser } from '../middleware/funcs.js';

const router = Router();

router.route('/')
.get(getproducts)
.post(authenticateUser,  upload.array('images', 7),createProductValidation, craeteProduct);

router.route('/:id')
.get(paramValidation, getProduct)
.patch(authenticateUser, upload.array('images', 7),paramValidation, createProductValidation, updateProduct)
.delete(paramValidation, authenticateUser, deleteProduct);

export default router;