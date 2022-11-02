import { Router } from 'express';
import validateAuth from '../helpers/TokenManager/AuthorizationValidation';
import UserController from '../controllers/UserController';
import UserService from '../services/UserService';

const router = Router();
const service = new UserService();
const controller = new UserController(service);

router.post('/', controller.login);
router.get('/validate', validateAuth);

export default router;
