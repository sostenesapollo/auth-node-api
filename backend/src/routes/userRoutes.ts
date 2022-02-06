import { Router } from 'express';
import UserController from '../controller/userController';
// import checkAuth from '../middleware/checkAuth';

const routes = Router()
// routes.use(checkAuth)
routes.get('/user/', UserController.index)
routes.get('/user/:id', UserController.findOne)
routes.post('/user', UserController.createUser)
routes.put('/user/:id', UserController.updateUser)
routes.delete('/user/:id', UserController.deleteUser)

export default routes
