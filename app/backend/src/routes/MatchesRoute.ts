import { Router } from 'express';
import MatchesServices from '../services/MatchesServices';
import MatchesController from '../controllers/MatchesController';

const router = Router();
const service = new MatchesServices();
const controller = new MatchesController(service);

router.get('/', controller.getAllMatches);
router.post('/', controller.insertNewMatch);
router.patch('/:id/finish');

export default router;
