import jwt from "jsonwebtoken";
import Vendor from "../models/vendor.model.js";
import { ENV } from "../configs/env.js";

export const authenticateVendor = async (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({
        error: "Unauthorized",
        message: "No authentication token provided",
        success: false,
      });
    }

    // Verify token
    const decoded = jwt.verify(token, ENV.JWT_SECRET);

    // Get vendor from DB
    const vendor = await Vendor.findById(decoded._id).select("-password");

    if (!vendor) {
      return res.status(404).json({
        error: "Vendor not found",
        success: false,
      });
    }

    // Check role
    if (vendor.role !== "vendor") {
      return res.status(403).json({
        error: "Forbidden",
        message: "Access denied: not a vendor",
        success: false,
      });
    }

    // Check verification & active status
    if (!vendor.isVerified) {
      return res.status(403).json({
        error: "Account not verified",
        message: "Your account is not yet verified",
        success: false,
      });
    }

    if (!vendor.isActive) {
      return res.status(403).json({
        error: "Account inactive",
        message: "Your account has been deactivated. Please contact support.",
        success: false,
      });
    }

    // Attach vendor to request
    req.user = vendor;

    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({
      error: "Invalid or expired token",
      message: error.message,
      success: false,
    });
  }
};
