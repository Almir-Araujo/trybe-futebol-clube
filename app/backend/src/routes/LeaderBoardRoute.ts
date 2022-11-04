import { Router } from 'express';
import LeaderboardController from '../controllers/LeaderboardController';

const router = Router();
const controller = new LeaderboardController();

router.get('/home', controller.getLeaderboard);

export default router;
