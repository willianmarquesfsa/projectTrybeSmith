import { Router } from 'express';
import OrdersController from '../controllers/orders_controller';

const router = Router();
const ordersController = new OrdersController();

// const booksSlashId = '/pessoas/:id';

router.get('/orders', ordersController.getAll);
  
/*
router.get('/pessoas/:id', booksController.getById);

router.put('/pessoas/:id', booksController.update);
router.delete(booksSlashId, booksController.remove);
*/
export default router;