import { Router } from "express";
const router = Router();
import {
    orderStatus,
    receiveOrder,
    notifyDeliveryman,
    delivered,
    sendOrderStatus,
} from "../controllers/restaurant.controller";
import { verifyToken } from "./auth.jwt";

router.post('/receive-order', receiveOrder);
router.post("/delivered", delivered);
router.post("/order",orderStatus);
router.post("/notify-deliveryman", notifyDeliveryman);
router.post('/send-order-status', sendOrderStatus);

export default router;
