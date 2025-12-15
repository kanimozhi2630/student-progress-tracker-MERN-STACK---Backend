import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";

dotenv.config();
connectDB();


const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/students", studentRoutes);

app.get("/", (req, res) => res.send("API Running"));

app.listen(process.env.PORT, () =>
  console.log(`Server running at ${process.env.PORT}`)
);
