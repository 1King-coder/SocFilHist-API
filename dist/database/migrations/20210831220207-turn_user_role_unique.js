"use strict";module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('roles', 'user_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
    });
  },

  down: () => {},
};
