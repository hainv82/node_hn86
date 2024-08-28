
import { Router } from 'express';
import * as userController from '../controllers/user_controller.js';
import { protect } from '../middleware/auth.js';
const routerUser = Router();

// Define your user routes here
// routerUser.post('/register', (req, res) => {
//   res.status(200).json(req.params);
// });
routerUser.post('/import/all', userController.importUsers);
routerUser.post('/login', userController.loginUser);
routerUser.post('/register', userController.registerUser);
routerUser.put('/', protect, userController.updateProfile);
routerUser.post('/delete', protect, userController.deleteUser);
routerUser.post('/update_password', protect, userController.changePassword);
routerUser.get('/profile', protect, userController.getUserProfile);
export default routerUser;

