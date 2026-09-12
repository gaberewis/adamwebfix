import { Router } from "express";
import { capturePayment, createPage } from '../controllers/page.js'
import upload from "../middleware/multer.js";
import { userToken  } from "../middleware/funcs.js";



const router = Router();

router.post(
  "/create-page", upload.array("images", 7), createPage);
router.post('/payments', capturePayment);






export default router;