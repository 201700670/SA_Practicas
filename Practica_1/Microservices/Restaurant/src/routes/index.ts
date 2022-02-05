import { Router } from "express";
const router = Router();

import restaurantRoutes from "./restaurant.route";

router.use('/restaurant', restaurantRoutes);

export default router;