import { Model, DataTypes } from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';

export default class Team extends Model {}

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
  // ... Outras configs
  underscored: true,
  sequelize: db,
  // modelName: 'teams',
  // timestamps: false,
});
