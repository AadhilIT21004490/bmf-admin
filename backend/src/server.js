import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./configs/db.js";
import { ENV } from "./configs/env.js";
import authRoutes from "./routes/auth.routes.js";
import fleetRoutes from "./routes/fleet.routes.js";

const app = express();

// Databse connection
await connectDB();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

const port = ENV.PORT || 8002;

// Routes
app.use("/api/v/health", (req, res) =>
  res.status(200).json("Im healthy dont worry :)")
);
app.use("/api/v/auth", authRoutes);
app.use("/api/v/fleet", fleetRoutes);

app.listen(port, () => console.log(`Server is up and running on ${port}`));
