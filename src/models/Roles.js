import Sequelize, { Model } from 'sequelize';

export default class Roles extends Model {
  static init(sequelize) {
    super.init({
      role: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
    }, {
      sequelize,
      tableName: 'roles',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' });
  }
}
