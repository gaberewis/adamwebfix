import { Router } from 'express';
import { createProudctValidation, paramValidation} from '../middleware/validation.js';
import {
    getProudcts,
    craeteProudct,
    getProudct,
    updateProudct,
    deleteProudct,
    showStates
} from '../controllers/Proudcts.js';
import { checkIsDemo } from '../controllers/auth.js';

const router = Router();


router.route('/').get( getProudcts).post(createProudctValidation,craeteProudct);


router.route('/:id').get(paramValidation, getProudct).patch(checkIsDemo, updateProudct).delete(checkIsDemo, deleteProudct);



export default router;