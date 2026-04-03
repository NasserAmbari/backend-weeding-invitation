import { Router } from "express";
import { RsvpController } from "../controllers/rsvpController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
const router = Router();
router.post("/", RsvpController.create);
router.get("/", authMiddleware, RsvpController.getAll);
export default router;
