import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Vendor from "../models/vendor.model.js";
import { ENV } from "../configs/env.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        error: "Email and password are required",
        success: false,
      });
    }
    const vendor = await Vendor.findOne({
      email: email.toLowerCase(),
      role: "vendor",
    });

    if (!vendor) {
      return res.status(404).json({
        error: "Vendor not found",
        success: false,
      });
    }

    const isPasswordValid = await bcrypt.compare(password, vendor.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        error: "Invalid Email or Password",
        success: false,
      });
    }

    // validate if account is not verified or not active
    const isVendorVerified = vendor.isVerified;
    const isVendorActive = vendor.isActive;
    if (!isVendorVerified) {
      return res.status(401).json({
        error: "Your Account isn't verified yet. Please try again later.",
        success: false,
      });
    }

    if (!isVendorActive) {
      return res.status(401).json({
        error: "Your Account is inactive. Please contact admin.",
        success: false,
      });
    }

    // generate token and send it in cookie
    const token = jwt.sign(
      { vendorId: vendor.vendorId, role: vendor.role, _id: vendor._id },
      ENV.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    // set cookie in response
    res.cookie("token", token, {
      httpOnly: true,
      secure: ENV.NODE_ENV === "production",
      sameSite: ENV.NODE_ENV === "production" ? "strict" : "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 day
    });

    // remove password from response
    const { password: _, ...rest } = vendor._doc;

    return res.status(200).json({
      vendor: rest,
      success: true,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      error: "Internal Server Error",
      message: error.message,
      success: false,
    });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("token", null, {
      httpOnly: true,
      secure: ENV.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 0,
    });
    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      error: "Internal Server Error",
      message: error.message,
      success: false,
    });
  }
};

export const account = async (req, res) => {
  try {
    const data = req.user;
    res.status(200).json({
      vendor: data,
      success: true,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      error: "Internal Server Error",
      message: error.message,
      success: false,
    });
  }
};
