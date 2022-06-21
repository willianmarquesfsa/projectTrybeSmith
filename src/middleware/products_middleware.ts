import { Request, Response, NextFunction } from 'express';

class MiddlewareProducts {
  public productValidadename = async (req: Request, res: Response, next: NextFunction) => {    
    const { body: { name } } = req;
    if (name === undefined) {
      res.status(400).json({ message: '"name" is required' });
    } else if (typeof name !== 'string') {
      res.status(422).json({ message: '"name" must be a string' });
    } else if (name.length < 3) {
      res.status(422).json({ message: '"name" length must be at least 3 characters long' });
    } else { next(); }
  };

  public productValidadeamount = async (req: Request, res: Response, next: NextFunction) => {    
    const { body: { amount } } = req;
    if (amount === undefined) {
      res.status(400).json({ message: '"amount" is required' });
    } else if (typeof amount !== 'string') {
      res.status(422).json({ message: '"amount" must be a string' });
    } else if (amount.length < 3) {
      res.status(422).json({ message: '"amount" length must be at least 3 characters long' });
    } else { next(); }
  };
}

export default MiddlewareProducts;