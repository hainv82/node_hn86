import { Router } from "express";
import * as orderController from "../controllers/order_controller.js";
import { protect } from "../middleware/auth.js";
const routerOrder = Router();
routerOrder.post('/import/all', orderController.importOrder);
routerOrder.post('/insert', protect, orderController.insertOrder);
routerOrder.get('', protect, orderController.getOrder);

export default routerOrder;