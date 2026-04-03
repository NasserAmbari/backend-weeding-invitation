import "dotenv/config";
import cors from "cors";
import express, { Request, Response, Application } from "express";
import rsvpRoutes from "./routes/rsvpRoutes";
import authRoutes from "./routes/authRoutes";

const app: Application = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3001",
    methods: ["GET", "POST"],
  }),
);

// Middleware to parse incoming JSON requests
app.use(express.json());

// Register Routes
app.use("/api/auth", authRoutes);
app.use("/api/rsvp", rsvpRoutes);

app.use((req: Request, res: Response) => {
  res.status(404).json({ success: false, error: "Route tidak ditemukan" });
});

// Global error handler
// app.use(errorHandler);

export default app;
