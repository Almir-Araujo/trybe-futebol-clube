import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import UnauthorizedError from '../../errors/UnauthorizedError';

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;
    const secret = process.env.JWT_SECRET || 'jwt_secret';

    if (!token) throw new UnauthorizedError('Authorization token not found');

    jwt.verify(token as string, secret);
    next();
  } catch (error) {
    throw new UnauthorizedError('Token must be a valid token');
  }
};

export default validateToken;
