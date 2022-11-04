import models from '../database/models';
import leaderboardQuery from '../helpers/TokenManager/query/LeaderboardQuery';

export default class LeaderboardService {
  getLeaderboard = async () => {
    const [leaderboard] = await models.query(leaderboardQuery);
    return leaderboard;
  };
}
