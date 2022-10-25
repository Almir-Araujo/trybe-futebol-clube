import { compareSync } from 'bcryptjs';
import encrypt from './Bcryptjs';

export default function compare(password: string) {
  const hash = encrypt(password);
  return compareSync(password, hash);
}
