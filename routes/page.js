import { Router } from "express";

import {userPayload } from '../middleware/funcs.js';
import { capturePayment, createPage, getPage, editPage, delPage,
  changeStatus, reportpage
 } from '../controllers/page.js'
import upload from "../middleware/multer.js";


const router = Router();

router.post("/create-page", upload.array("images", 7), createPage);
router.patch('/payments', capturePayment);
router.patch("/report/:id", reportpage);
router.patch("/change-status/:id", userPayload, changeStatus);
router.patch('/:id', upload.array("images", 7), userPayload,  editPage);
router.get('/:id', getPage);
router.delete('/:id',userPayload, delPage);

export default router;