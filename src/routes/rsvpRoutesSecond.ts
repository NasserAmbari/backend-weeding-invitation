import { Router } from "express";
import { RsvpControllerSecond } from "../controllers/rsvpControllerSecond.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = Router({ mergeParams: true });

router.post("/", RsvpControllerSecond.create);
router.get("/", RsvpControllerSecond.getAll);
router.get("/somedata", RsvpControllerSecond.getSomeData);

export default router;
