import multer from "multer";
import path from "path";
import fs from "fs";
import { ENV } from "../configs/env.js";

// todo:shift this to env file
const uploadDir = path.join(process.cwd(), "uploads", "payments");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const filename = `payment-${Date.now()}${ext}`;
    cb(null, filename);
  },
});

// Accept images and PDFs
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|pdf/;
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowedTypes.test(ext)) cb(null, true);
  else cb(new Error("Only JPG, PNG, or PDF files allowed"));
};

export const uploadPaymentProof = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
  fileFilter,
}).single("proofDocument"); // field name must match frontend FormData
