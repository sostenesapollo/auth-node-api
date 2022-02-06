import { Router } from 'express';
import Login from '../controller/login';

const routes = Router()

routes.post('/login', Login.auth)

export default routes
