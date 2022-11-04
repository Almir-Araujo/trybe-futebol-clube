import { Request, Response } from 'express';
import LeaderboardService from '../services/LeaderboardService';

export default class LeaderboardController {
  leaderboardService: LeaderboardService;

  constructor() {
    this.leaderboardService = new LeaderboardService();
  }

  getLeaderboard = async (_req: Request, res: Response) => {
    const response = await this.leaderboardService.getLeaderboard();
    return res.status(200).json(response);
  };
}
