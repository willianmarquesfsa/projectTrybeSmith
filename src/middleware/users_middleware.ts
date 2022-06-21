import { Request, Response, NextFunction } from 'express';

class MiddlewareUsers {
  public userValidadename = async (req: Request, res: Response, next: NextFunction) => {    
    const { body: { username } } = req;
    if (username === undefined) {
      res.status(400).json({ message: '"username" is required' });
    } else if (typeof username !== 'string') {
      res.status(422).json({ message: '"username" must be a string' });
    } else if (username.length < 3) {
      res.status(422).json({ message: '"username" length must be at least 3 characters long' });
    } else { next(); }
  };
  
  public userValidadeclasse = async (req: Request, res: Response, next: NextFunction) => {    
    const { body: { classe } } = req;
    if (classe === undefined) {
      res.status(400).json({ message: '"classe" is required' });
    } else if (typeof classe !== 'string') {
      res.status(422).json({ message: '"classe" must be a string' });
    } else if (classe.length < 3) {
      res.status(422).json({ message: '"classe" length must be at least 3 characters long' });
    } else { next(); }
  }; 

  public userValidadelevel = async (req: Request, res: Response, next: NextFunction) => {    
    const { body: { level } } = req;
    if (level === undefined) {
      res.status(400).json({ message: '"level" is required' });
    } else if (typeof level !== 'number') {
      res.status(422).json({ message: '"level" must be a number' });
    } else if (level < 1) {
      res.status(422).json({ message: '"level" must be greater than or equal to 1' });
    } else { next(); }
  };
  
  public userValidadepassword = async (req: Request, res: Response, next: NextFunction) => {    
    const { body: { password } } = req;
    if (password === undefined) {
      res.status(400).json({ message: '"password" is required' });
    } else if (typeof password !== 'string') {
      res.status(422).json({ message: '"password" must be a string' });
    } else if (password.length < 8) {
      res.status(422).json({ message: '"password" length must be at least 8 characters long' });
    } else { next(); }
  };
}

export default MiddlewareUsers;