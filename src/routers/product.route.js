import { Router } from "express";
import * as productController from "../controllers/product_controller.js";
import { protect } from "../middleware/auth.js";
const routerProduct = Router();
routerProduct.post('/import/all', productController.importProduct);
routerProduct.post('/insert', protect, productController.insertProduct);
routerProduct
    .get('', protect, productController.getProduct)
    .patch('', protect, productController.updateProduct)
    .delete('', protect, productController.deleteProduct);

export default routerProduct;