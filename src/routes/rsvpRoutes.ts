import { Router } from "express";
import { RsvpController } from "../controllers/rsvpController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.post("/", RsvpController.create);
router.get("/", authMiddleware, RsvpController.getAll);

export default router;
