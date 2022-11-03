import { Model, DataTypes } from 'sequelize';
import db from '.';

export default class Team extends Model {
  readonly id!: number;
  teamName!: string;
}

Team.init({
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  teamName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'teams',
  timestamps: false,
});
