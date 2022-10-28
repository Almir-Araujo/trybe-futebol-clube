import createToken from '../helpers/TokenManager/TokenManager';
import UserModel from '../database/models/UsersModel';
import UnauthorizedError from '../errors/UnauthorizedError';
// import compare from 'src/helpers/TokenManager/Compare';

interface Irequest {
  email: string;
  password: string
}

export default class UserService {
  login = async ({ email, password }: Irequest): Promise<string> => {
    const emailRegex = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

    if (!emailRegex.test(email)) throw new UnauthorizedError('Incorrect email or password');

    const user = await UserModel.findOne({ where: { email } });

    console.log(user?.getDataValue);

    if (!user) throw new UnauthorizedError('Incorrect email or password');

    const token = createToken(email, password);

    return token;
  };
}
