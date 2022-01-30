import { Router } from "express";
const router = Router();
import {
    receiveOrder,
    delivered
} from "../controllers/deliveryman.controller";
import { verifyToken } from "./auth.jwt";

router.post('/receive-order', receiveOrder);
router.post('/delivered', delivered);

export default router;
