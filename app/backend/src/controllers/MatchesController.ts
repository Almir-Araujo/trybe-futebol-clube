import { Request, Response } from 'express';
import MatchesService from '../services/MatchesServices';

export default class TeamsController {
  constructor(private service: MatchesService) {}

  getAllMatches = async (req: Request, res: Response) => {
    const { inProgress } = req.query;

    if (inProgress) {
      const matchesFiltered = await this.service.getMatchesByProgress(inProgress === 'true');
      return res.status(200).json(matchesFiltered);
    }

    const matches = await this.service.getAllMatches();
    return res.status(200).json(matches);
  };

  insertNewMatch = async (req: Request, res: Response) => {
    const newMatch = req.body;
    const newMatchInsert = await this.service.insertNewMatch(newMatch);
    return res.status(201).json(newMatchInsert);
  };

  updateMatchProgress = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.service.updateMatchProgress(Number(id));
    return res.status(200).json({ message: 'Finished' });
  };

  updateInProgressMatchResults = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.service.updateInProgressMatchResults(Number(id), req.body);
    return res.status(200).json({ message: 'Match updated' });
  };
}
