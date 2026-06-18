import { Router } from "express";

import { capturePayment } from '../controllers/Pages.js'


const router = Router();


router.post('/payments', capturePayment )


export default router;