import Vendor from "../models/vendor.model.js";

export const generatePaymentId = async () => {
  const randomNum = Math.floor(10000 + Math.random() * 90000); // ensures 5 digits

  const isInDb = await Vendor.findOne({
    "paymentHistory.paymentId": `#${randomNum}`,
  });
  if (isInDb) {
    return generatePaymentId();
  }
  return `#${randomNum}`;
};
