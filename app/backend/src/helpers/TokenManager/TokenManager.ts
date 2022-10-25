import * as jwt from 'jsonwebtoken';

export default function createToken(email: string, password: string): string {
  const payload = { email, password };
  const secretKey = process.env.JWT_SECRET || 'secret';

  const token = jwt.sign(payload, secretKey);

  return token;
}
