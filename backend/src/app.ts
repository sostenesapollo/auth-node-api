import express from 'express'
import checkAuth from './middleware/checkAuth';
import routesLogin from './routes/login';
import routesUser from './routes/userRoutes';

const app = express()
app.use(express.json())
app.use(routesLogin)
// app.use(checkAuth)
app.use(routesUser)

export default app;
