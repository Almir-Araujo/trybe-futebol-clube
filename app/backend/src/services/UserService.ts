import createToken from '../helpers/TokenManager/TokenManager';
import UserModel from '../database/models/UsersModel';

interface Irequest {
  email: string;
  password: string
}

export default class UserService {
  login = async ({ email, password }: Irequest) => {
    await UserModel.findOne({ where: { email, password } });

    const token = createToken(email, password);

    return token;
  };
}
