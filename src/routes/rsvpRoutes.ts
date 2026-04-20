import { Router } from "express";
import { RsvpController } from "../controllers/rsvpController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = Router({ mergeParams: true });

router.post("/", RsvpController.create);
router.get("/", RsvpController.getAll);
router.get("/somedata", RsvpController.getSomeData);

export default router;
