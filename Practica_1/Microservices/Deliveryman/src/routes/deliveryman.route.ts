import { Router } from "express";
const router = Router();
import {
  receiveOrder,
} from "../controllers/deliveryman.controller";
import { verifyToken } from "./auth.jwt";

router.post('/receive-order', receiveOrder);

export default router;
