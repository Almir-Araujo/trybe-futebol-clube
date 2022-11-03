import { Request, Response } from 'express';
import MatchesService from '../services/MatchesServices';

export default class TeamsController {
  constructor(private service: MatchesService) {}

  getAllMatches = async (req: Request, res: Response) => {
    const teams = await this.service.getAllTMatches();
    return res.status(200).json(teams);
  };

  // getTeamById = async (req: Request, res: Response) => {
  //   const { id } = req.params;
  //   const team = await this.service.getTeamById(Number(id));
  //   return res.status(200).json(team);
  // };
}
