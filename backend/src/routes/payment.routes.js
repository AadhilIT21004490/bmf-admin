import express from "express";
import { authenticateVendor } from "../middlewares/auth.middleware.js";
import { uploadPaymentProof } from "../middlewares/uploadPaymentProofs.middleware.js";
import { addPayment, getPayments } from "../controllers/payment.controller.js";

const router = express.Router();

router.post("/", authenticateVendor, uploadPaymentProof, addPayment);
router.get("/", authenticateVendor, getPayments);

export default router;
