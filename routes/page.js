import { Router } from "express";

import { authenticateUser } from '../middleware/funcs.js';
import { capturePayment, createPage, getPage, editPage, delPage,
  changeStatus, reportpage
 } from '../controllers/page.js';
 import { paramValidation } from '../middleware/validation.js';
import upload from "../middleware/multer.js";


const router = Router();
router.post("/create-page", authenticateUser, upload.array("images", 7),  createPage);
router.patch('/payments', authenticateUser, capturePayment);
router.patch("/report/:id",  reportpage);
router.patch("/change-status/:id", authenticateUser, changeStatus);
router.patch('/:id',authenticateUser, upload.array("images", 7),   editPage);
router.get('/:id',  getPage);
router.delete('/:id',  authenticateUser, delPage);

export default router;