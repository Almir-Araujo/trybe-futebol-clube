import createToken from '../helpers/TokenManager/TokenManager';
import UserModel from '../database/models/UsersModel';
import UnauthorizedError from '../errors/UnauthorizedError';

interface Irequest {
  email: string;
  password: string
}

export default class UserService {
  login = async ({ email, password }: Irequest): Promise<string> => {
    const user = await UserModel.findOne({ where: { email, password } });

    if (!user) throw new UnauthorizedError('Incorrect email or password');

    const token = createToken(email, password);

    return token;
  };
}
