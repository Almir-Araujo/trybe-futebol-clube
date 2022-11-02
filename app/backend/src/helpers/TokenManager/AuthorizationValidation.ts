import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import UnauthorizedError from '../../errors/UnauthorizedError';

interface IRole {
  role: string,
}

const validateAuth = async (req: Request, res: Response, _next: NextFunction) => {
  const token = req.headers.authorization;
  const secret = process.env.JWT_SECRET || 'jwt_secret';
  try {
    const decoded = jwt.verify(token as string, secret) as IRole;
    const { role } = decoded;
    return res.status(200).json({ role });
  } catch (error) {
    throw new UnauthorizedError('Token must be a valid token');
  }
};

export default validateAuth;
