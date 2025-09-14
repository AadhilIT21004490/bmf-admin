import { ENV } from "../configs/env.js";
import Vendor from "../models/vendor.model.js";
import { generatePaymentId } from "../utils/generatePaymentId.js";

export const addPayment = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.user._id);

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No payment proof file uploaded",
      });
    }

    vendor.paymentHistory.push({
      paymentId: await generatePaymentId(),
      amount: req.body.amount,
      paymentType: req.body.paymentType,
      paymentDate: req.body.paymentDate,
      reference: req.body.reference,
      proofDocument: req.file.filename,
    });

    await vendor.save();
    return res.status(200).json({
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

export const getPayments = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.user._id);
    if (vendor.paymentHistory.length === 0) {
      vendor.paymentHistory.push({
        paymentId: await generatePaymentId(),
        amount: ENV.REGISTRATION_FEE,
        paymentType: "Registration",
        paymentDate: vendor.createdAt,
        reference: vendor.nicNumber,
        proofDocument: vendor.paymentProof,
        status: "Approved",
      });

      await vendor.save();
    }
    return res.status(200).json({
      payments: vendor.paymentHistory,
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
