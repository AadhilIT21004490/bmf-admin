import express from "express";
import cors from "cors";
import { connectDB } from "./configs/db.js";
import { ENV } from "./configs/env.js";
// import vendorRoutes from "./routes/vendor.routes.js";

const app = express();

// Databse connection
await connectDB();

// Middlewares
app.use(express.json());
app.use(cors());

const port = ENV.PORT || 8002;

// Routes
app.use("/api/v/health", (req, res) =>
  res.status(200).json("Im healthy dont worry :)")
);
// app.use("/api/v", vendorRoutes);

app.listen(port, () => console.log(`Server is up and running on ${port}`));
