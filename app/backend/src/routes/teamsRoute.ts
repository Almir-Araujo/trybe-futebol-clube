import { Router } from 'express';
import TeamsService from '../services/TeamsService';
import TeamsController from '../controllers/TeamsController';

const router = Router();
const service = new TeamsService();
const controller = new TeamsController(service);

router.get('/', controller.getAllTeams);
router.get('/:id', controller.getTeamById);

export default router;
