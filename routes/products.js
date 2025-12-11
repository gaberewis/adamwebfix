import { Router } from 'express';
import { createProudctValidation, paramValidation} from '../middleware/validation.js';
import {
    getproducts,
    craeteProudct,
    getProudct,
    updateProudct,
    deleteProudct,
    showStates
} from '../controllers/products.js';
import { checkIsDemo } from '../controllers/auth.js';

const router = Router();


router.route('/').get( getproducts).post(createProudctValidation,craeteProudct);


router.route('/:id').get(paramValidation, getProudct).patch(checkIsDemo, updateProudct).delete(checkIsDemo, deleteProudct);



export default router;