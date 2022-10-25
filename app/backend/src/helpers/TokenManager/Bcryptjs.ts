import { hashSync } from 'bcryptjs';

export default function encrypt(password: string) {
  const hash = hashSync(password, 10);
  return hash;
}
