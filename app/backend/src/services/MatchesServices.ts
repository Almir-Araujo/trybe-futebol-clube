import IMatch from '../database/models/entities/IMatch';
import MatchesModel from '../database/models/MatchesModel';
import Team from '../database/models/TeamsModel';

export default class TeamsService {
  public getAllMatches = async () => {
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

  getMatchesByProgress = async (inProgress: boolean) => {
    const matchesByProgress = await MatchesModel.findAll({
      where: { inProgress },
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
    return matchesByProgress;
  };

  insertNewMatch = async (match: IMatch) => {
    const { id } = await MatchesModel.create(match);
    const response = await MatchesModel.findByPk(id);
    return response;
  };

  updateMatchProgress = async (id: number) => {
    const updateMatchProgress = await MatchesModel.update({ inProgress: false }, { where: { id } });
    return updateMatchProgress;
  };
}
