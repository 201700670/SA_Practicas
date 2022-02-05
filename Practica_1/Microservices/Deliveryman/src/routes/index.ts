import { Router } from "express";
const router = Router();

import userRoutes from "./deliveryman.route";

router.use('/deliveryman', userRoutes);

export default router;