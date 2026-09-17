import { Router } from "express";


import { capturePayment, createPage, getPage, editPage } from '../controllers/page.js'
import upload from "../middleware/multer.js";


const router = Router();

router.post(
  "/create-page", upload.array("images", 7), createPage
);

router.post('/payments', capturePayment);

router.get('/:id', getPage);
router.post('/:id', upload.array("images", 7), editPage);

export default router;