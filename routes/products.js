import { Router } from 'express';
import { createProductValidation, paramValidation} from '../middleware/validation.js';
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


router.route('/').get(getproducts);
router.route('/admin').get(authenticateUser, getproducts).post(createProductValidation ,authenticateUser , upload.array('images', 7) , craeteProduct);
router.route('/:id').get(paramValidation, getProduct).patch(updateProduct).delete(deleteProduct);



export default router;