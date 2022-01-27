import { Router } from "express";
const router = Router();
import {
  orderStatus,
  sendData
} from "../controllers/restaurant.controller";
import { verifyToken } from "./auth.jwt";

router.post("/order", orderStatus);
router.get("/send", sendData);

export default router;
