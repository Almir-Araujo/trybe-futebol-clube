import { Model, DataTypes } from 'sequelize';
import db from '.';
import TeamsModel from './TeamsModel';

export default class Match extends Model {
  id?: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: boolean;
}

Match.init({
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  homeTeam: {
    type: DataTypes.INTEGER,
    allowNull: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
  homeTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  awayTeam: {
    type: DataTypes.INTEGER,
    allowNull: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
  awayTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  inProgress: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

Match.belongsTo(TeamsModel, { foreignKey: 'homeTeam', as: 'teamHome' });
Match.belongsTo(TeamsModel, { foreignKey: 'awayTeam', as: 'teamAway' });
