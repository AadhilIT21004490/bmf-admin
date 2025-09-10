import "dotenv/config";

export const ENV = {
  MONGODB_URI: process.env.MONGODB_URI,
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET,
  NODE_ENV: process.env.NODE_ENV,
  FILEPATH_FLEETS: process.env.FILEPATH_FLEETS,
  FILEPATH_PAYMENTS: process.env.FILEPATH_PAYMENTS,
  REGISTRATION_FEE: process.env.REGISTRATION_FEE,
};
