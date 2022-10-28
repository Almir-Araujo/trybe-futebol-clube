import { Request, Response } from 'express';
import UserService from '../services/UserService';

const userService = new UserService();

export default class UserController {
  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }

    const emailRegex = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    if (!emailRegex.test(email)) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }

    const token = await userService.login({ email, password });

    return res.status(200).json({ token });
  };
}
