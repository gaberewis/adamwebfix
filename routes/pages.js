import { Router } from "express";

import { capturePayment } from '../controllers/pages.js'


const router = Router();


router.post('/payments', capturePayment )


export default router;