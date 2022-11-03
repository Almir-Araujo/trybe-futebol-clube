import MatchesModel from '../database/models/MatchesModel';
import Team from '../database/models/TeamsModel';

export default class TeamsService {
  public getAllTMatches = async () => {
    const matches = await MatchesModel.findAll({
      include: [
        {
          model: Team,
          as: 'teamHome',
          attributes: { exclude: ['id'] },
        },
        {
          model: Team,
          as: 'teamAway',
          attributes: { exclude: ['id'] },
        },
      ],
    });
    return matches;
  };

  // public getTeamById = async (id: number) => {
  //   const team = await matchesModel.findByPk(id);
  //   return team;
  // };
}
