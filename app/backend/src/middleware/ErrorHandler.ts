import { NextFunction, Request, Response } from 'express';

export default class ErrorHandler {
  static handler(error: Error, _req: Request, res: Response, next: NextFunction) {
    res.status(500).json({ message: error.message });
    next();
  }
}
