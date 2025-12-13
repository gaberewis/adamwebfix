import { Router } from 'express';
import { createProudctValidation, paramValidation} from '../middleware/validation.js';
import {
    getproducts,
    craeteProudct,
    getProudct,
    updateProudct,
    deleteProudct,
   
} from '../controllers/products.js';
import upload from '../middleware/multer.js';
import { checkIsDemo } from '../controllers/auth.js';

const router = Router();


router.route('/').get( getproducts).post(createProudctValidation, upload.array('images', 7) , craeteProudct);


router.route('/:id').get(paramValidation, getProudct).patch(checkIsDemo, updateProudct).delete(checkIsDemo, deleteProudct);



export default router;