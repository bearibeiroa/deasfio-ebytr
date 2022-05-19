import { DataTypes, Model } from 'sequelize';
import db from '.';

class TaskModel extends Model {
  public id: number;

  public taskContent: string;

  public status: string;
}

TaskModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  taskContent: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'tasks',
  timestamps: false,
});

export default TaskModel;
