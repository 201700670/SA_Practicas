import { Router } from "express";
const router = Router();
import {
  orderStatus
} from "../controllers/deliveryman.controller";
import { verifyToken } from "./auth.jwt";

router.post("/order", orderStatus);

export default router;
