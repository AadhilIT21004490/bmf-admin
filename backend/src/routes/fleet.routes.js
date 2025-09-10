import express from "express";
import { createFleet } from "../controllers/fleet.controller.js";
import { authenticateVendor } from "../middlewares/auth.middleware.js";
import { uploadFleetImages } from "../middlewares/uploadFleetImages.middleware.js";
const router = express.Router();

router.post("/", authenticateVendor, uploadFleetImages, createFleet);

export default router;
