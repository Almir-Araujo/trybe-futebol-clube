import TeamsModel from '../database/models/TeamsModel';

export default class TeamsService {
  public getAllTeams = async () => {
    const teams = await TeamsModel.findAll();
    return teams;
  };

  public getTeamById = async (id: number) => {
    const team = await TeamsModel.findByPk(id);
    return team;
  };
}
