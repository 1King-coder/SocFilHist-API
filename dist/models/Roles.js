"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Roles extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      role: {
        type: _sequelize2.default.INTEGER,
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
} exports.default = Roles;
