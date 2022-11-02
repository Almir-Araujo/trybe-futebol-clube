import { compare } from 'bcryptjs';
import UserModel from '../database/models/UsersModel';
import UnauthorizedError from '../errors/UnauthorizedError';
import generateToken from '../helpers/TokenManager/generateToken';

export default class UserService {
  constructor(private model = UserModel) {}

  public login = async (email: string, password: string) => {
    const user = await UserModel.findOne({ where: { email } });

    if (!user) throw new UnauthorizedError('Incorrect email or password');

    const comparePass = await compare(password, user.password);

    if (!comparePass) throw new UnauthorizedError('Incorrect email or password');

    const token = generateToken(user);

    return token;
  };
}
