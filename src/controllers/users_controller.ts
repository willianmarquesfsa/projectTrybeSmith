// ./controllers/books.controller.ts
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UsersServices from '../services/users_services';

class UsersControllers {
  constructor(private usersService = new UsersServices()) { }  

  public create = async (req: Request, res: Response) => {
    const users = req.body;
    const secret = 'seusecretdetoken';
    const { username, password } = users;
   
    enum JwtConfig { expiresIn = '7d', algorithm = 'HS256' }
    const token = jwt.sign({ data: { username, password } }, secret, JwtConfig);

    await this.usersService.create(users);
    res.status(StatusCodes.CREATED).json({ token });
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

export default UsersControllers;