import { Router } from "express";


import { capturePayment, createPage} from '../controllers/page.js'
import upload from "../middleware/multer.js";


const router = Router();

router.post(
  "/create-page",
  upload.array("images", 7),
  createPage
);

router.post('/payments', capturePayment );


export default router;