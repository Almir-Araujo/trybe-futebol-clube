import IUser from './IUser';

export default class User implements IUser {
  readonly id?: number;
  username: string;
  role: string;
  email: string;
  password!: string;
}
