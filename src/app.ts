import express from 'express';
import ProdutsRoute from './routes/producta_route';
import UsersRoute from './routes/users_route';
import OrdersRoute from './routes/orders_route';

const app = express();

app.use(express.json());
app.use(ProdutsRoute);
app.use(UsersRoute);
app.use(OrdersRoute);

export default app;
