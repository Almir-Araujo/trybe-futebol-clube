import TeamsModel from '../database/models/TeamsModel';

export default class TeamsService {
  public getAllTeams = async () => {
    const teams = await TeamsModel.findAll();
    return teams;
  };
}
