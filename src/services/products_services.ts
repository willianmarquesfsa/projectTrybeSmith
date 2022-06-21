// ./services/books.service.ts

import connection from '../models/connection';
import ProductModel from '../models/products_model';
import Product from '../interfaces/products_interface';
// import { NotFoundError } from 'restify-errors';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    const Products = await this.model.getAll();
    return Products;
  }

  public create(product: Product): Promise<Product> {
    return this.model.create(product);
  }

  public async getByOrderId(orderId: number): Promise<Product> {
    const product = await this.model.getByOrderId(orderId);
    return product;
  }
  /*
    public async getById(id: number): Promise<Book> {
        const book = await this.model.getById(id);
        return book;
    }
   
    public async update(id: number, book: Book): Promise<void> {
        const bookFound = await this.model.getById(id);
        if (!bookFound) {
            throw new NotFoundError('NotFoundError');
        }

        return this.model.update(id, book);
    }

    public async remove(id: number): Promise<void> {
        const bookFound = await this.model.getById(id);
        if (!bookFound) {
          throw new NotFoundError('NotFoundError');
        }
  
        this.model.remove(id);
      }
      */
}

export default ProductService;