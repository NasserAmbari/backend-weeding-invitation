import cors from "cors";
import express, { Request, Response, Application } from "express";
import rsvpRoutes from "./routes/rsvpRoutes.js";
import rsvpRoutesSecond from "./routes/rsvpRoutesSecond.js";
import authRoutes from "./routes/authRoutes.js";

const app: Application = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  }),
);

// Middleware to parse incoming JSON requests
app.use(express.json());

// Register Routes
app.use("/api/auth", authRoutes);
app.use("/api/rsvp/:id", rsvpRoutesSecond);
app.use("/api/rsvp/", rsvpRoutes);

app.use((req: Request, res: Response) => {
  res.status(404).json({ success: false, error: "Route tidak ditemukan" });
});

// Global error handler
// app.use(errorHandler);

export default app;
