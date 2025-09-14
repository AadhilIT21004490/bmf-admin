import express from "express";
import { login, logout, account } from "../controllers/auth.controller.js";
import { authenticateVendor } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/login", login);
router.post("/logout", logout);
router.get("/account", authenticateVendor, account);

export default router;
