import { Router } from 'express';
import ProductsController from '../controllers/products_controller';
import MiddlewareProducts from '../middleware/products_middleware';

const router = Router();
const productsController = new ProductsController();
const middlewareProducts = new MiddlewareProducts();
// const booksSlashId = '/pessoas/:id';

router.get('/products', productsController.getAll);
router.post(
  '/products/',
  middlewareProducts.productValidadename,
  middlewareProducts.productValidadeamount,
  productsController.create,
);
  
/*
router.get('/pessoas/:id', booksController.getById);

router.put('/pessoas/:id', booksController.update);
router.delete(booksSlashId, booksController.remove);
*/
export default router;