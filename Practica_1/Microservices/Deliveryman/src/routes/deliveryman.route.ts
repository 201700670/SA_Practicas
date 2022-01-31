import { Router } from "express";
const router = Router();
import {
    receiveOrder,
    delivered,
    sendOrderStatus,
} from "../controllers/deliveryman.controller";
import { verifyToken } from "./auth.jwt";

router.post('/receive-order', receiveOrder);
router.post('/delivered', delivered);
router.post('/send-order-status', sendOrderStatus);

export default router;
