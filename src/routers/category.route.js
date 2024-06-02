
import { Router } from 'express';
import * as categoryController from '../controllers/category_controller.js';
import { protect } from '../middleware/auth.js';
const routerCategory = Router();

routerCategory.post('/import/all', categoryController.importCategory);
routerCategory.post('/insert', protect, categoryController.insertCategory);
routerCategory.get('', protect, categoryController.getCategory);
routerCategory.post('/update', protect, categoryController.updateCategory);

export default routerCategory;