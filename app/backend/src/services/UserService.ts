import { compare } from 'bcryptjs';
import createToken from '../helpers/TokenManager/TokenManager';
import UserModel from '../database/models/UsersModel';
import UnauthorizedError from '../errors/UnauthorizedError';
import User from '../database/models/entities/User';

interface Irequest {
  email: string;
  password: string
}

export default class UserService {
  constructor(private model = UserModel) {}

  login = async ({ email, password }: Irequest): Promise<string> => {
    const user = await this.model.findOne({ where: { email } }) as unknown as { dataValues: User };

    if (!user) throw new UnauthorizedError('Incorrect email or password');

    const comparePass = await compare(password, user.dataValues.password);

    if (!comparePass) throw new UnauthorizedError('Incorrect email or password');

    const token = createToken(email, password);

    return token;
  };
}
