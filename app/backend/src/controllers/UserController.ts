import { Request, Response } from 'express';
import UserService from '../services/UserService';

const userService = new UserService();

export default class UserController {
  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const token = await userService.login({ email, password });

    return res.status(200).json({ token });
  };
}
