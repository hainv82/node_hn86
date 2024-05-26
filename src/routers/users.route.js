
import { Router } from 'express';
import * as userController from '../controllers/user_controller.js';
const routerUser = Router();

// Define your user routes here
routerUser.post('/register', (req, res) => {
  res.status(200).json(req.params);
});
routerUser.post('/import/all', userController.importUsers);
export default routerUser;

