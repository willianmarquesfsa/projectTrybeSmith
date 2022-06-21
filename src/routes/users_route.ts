import { Router } from 'express';
import UsersControllers from '../controllers/users_controller';
import MiddlewareUsers from '../middleware/users_middleware';

const router = Router();
const usersControllers = new UsersControllers();
const middlewareUsers = new MiddlewareUsers();
// const booksSlashId = '/pessoas/:id';

router.post(
  '/users/',
  middlewareUsers.userValidadename,
  middlewareUsers.userValidadelevel,
  middlewareUsers.userValidadeclasse,
  middlewareUsers.userValidadepassword,
  usersControllers.create,
);
  
/*
router.get('/pessoas/:id', booksController.getById);

router.put('/pessoas/:id', booksController.update);
router.delete(booksSlashId, booksController.remove);
*/
export default router;