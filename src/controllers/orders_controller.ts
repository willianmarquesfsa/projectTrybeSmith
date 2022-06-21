// ./controllers/books.controller.ts

import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrdersService from '../services/orders_services';
import ProductsService from '../services/products_services';

class OrdersController {
  constructor(
    private Orderservice = new OrdersService(),
    private productservice = new ProductsService(),
  ) { }  

  public getAll = async (_req: Request, res: Response) => {
    const orderss = this.Orderservice.getAll();
    const getAllPro = this.productservice.getAll();
    
    Promise.all([getAllPro, orderss]).then((valores) => {
      if (!getAllPro || !orderss) {
        return res.status(StatusCodes.NOT_FOUND)
          .json({ message: 'not found!' });
      }
      const resul = valores[1].map((x) => (
        { id: x.id,
          userId: x.userId,
          productsIds: valores[0].filter((c) => Number(c.orderId) === x.id).map((v) => v.id) }));
      res.status(StatusCodes.OK).json(resul);
    });

    // orderss.map((x, i) => ({ ...x, productsIds: [getByOr.orderId] }));    
  };

  /*
  public getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const book = await this.bookService.getById(id);

    if (!book) {
      return res.status(StatusCodes.NOT_FOUND)
        .json({ message: 'Book not found!'});
    }

    res.status(StatusCodes.OK).json(book);
  } 

  public update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const book = req.body;
    await this.bookService.update(id, book);

    res.status(StatusCodes.NO_CONTENT).end();
  };
  public remove = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
    await this.bookService.remove(id);

    res.status(StatusCodes.OK).json({ message: 'Book deleted successfully' });
  };
  */ 
}

export default OrdersController;