// ./controllers/books.controller.ts

import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductsService from '../services/products_services';

class ProductsController {
  constructor(private productService = new ProductsService()) { }  

  public getAll = async (_req: Request, res: Response) => {
    const productss = await this.productService.getAll();
    res.status(StatusCodes.OK).json(productss);
  };

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const productCreated = await this.productService.create(product);
    res.status(StatusCodes.CREATED).json(productCreated);
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

export default ProductsController;