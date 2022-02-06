import { Router } from 'express';
import UserController from '../controller/userController';

const routes = Router()

routes.get('/user/:id', UserController.findOne)
routes.post('/user', UserController.createUser)
routes.put('/user/:id', UserController.updateUser)
routes.delete('/user/:id', UserController.deleteUser)

export default routes
