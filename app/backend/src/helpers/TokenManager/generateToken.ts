import * as jwt from 'jsonwebtoken';
import User from '../../database/models/entities/User';

export default function generateToken(user: User) {
  const { email, password, role } = user;
  const secret = process.env.JWT_SECRET || 'secret';
  const token = jwt.sign({ email, password, role }, secret);
  return token;
}
