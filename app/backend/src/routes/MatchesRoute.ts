import { Router } from 'express';
import MatchesServices from '../services/MatchesServices';
import MatchesController from '../controllers/MatchesController';
import ValidateToken from '../helpers/TokenManager/ValidateToken';

const router = Router();
const service = new MatchesServices();
const controller = new MatchesController(service);

router.get('/', controller.getAllMatches);
router.post('/', ValidateToken, controller.insertNewMatch);
router.patch('/:id/finish', ValidateToken, controller.updateMatchProgress);
router.patch('/:id', controller.updateInProgressMatchResults);

export default router;
