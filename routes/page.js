import { Router } from "express";

import { authenticateUser } from '../middleware/funcs.js';
import { capturePayment, createPage, getPage, editPage, delPage,
  changeStatus, reportpage
 } from '../controllers/page.js';
 import { paramValidation, repoerValidator } from '../middleware/validation.js';
import upload from "../middleware/multer.js";


const router = Router();
router.post("/create-page", authenticateUser, upload.array("images", 7),  createPage);
router.patch('/payments', authenticateUser, capturePayment);
router.patch("/report/:id", paramValidation, repoerValidator,  reportpage);
router.patch("/change-status/:id", paramValidation,  authenticateUser, changeStatus);
router.patch('/:id',paramValidation, authenticateUser, upload.array("images", 7),   editPage);
router.get('/:id', paramValidation,  getPage);
router.delete('/:id', paramValidation, authenticateUser, delPage);

export default router;