// ./services/books.service.ts

import connection from '../models/connection';
import OrdersModel from '../models/orders_model';
import Orders from '../interfaces/orders_interface';
// import { NotFoundError } from 'restify-errors';

class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getAll(): Promise<Orders[]> {
    const Products = await this.model.getAll();
    return Products;
  }
}

export default OrdersService;