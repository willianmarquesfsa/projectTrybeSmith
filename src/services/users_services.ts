// ./services/books.service.ts

import connection from '../models/connection';
import UsersModel from '../models/users_model';
import Users from '../interfaces/users_interface';
// import { NotFoundError } from 'restify-errors';

class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }
  
  public create(user: Users): Promise<Users> {
    return this.model.create(user);
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

export default UsersService;