import multer from "multer";
import path from "path";
import fs from "fs";
import { ENV } from "../configs/env.js";

const uploadDir = ENV.FILEPATH;
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Example: fleet-<timestamp>-originalname.ext
    const ext = path.extname(file.originalname);
    const filename = `fleet-${Date.now()}${ext}`;
    cb(null, filename);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png/;
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowedTypes.test(ext)) cb(null, true);
  else cb(new Error("Only JPG, PNG files allowed"), false);
};

export const uploadFleetImages = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit per file
  fileFilter,
}).array("images", 6); // field name must match client form data, max 6 images
