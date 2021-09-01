module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('roles', 'created_at', {
      type: Sequelize.DATE,
      allowNull: false,
    });
    await queryInterface.addColumn('roles', 'updated_at', {
      type: Sequelize.DATE,
      allowNull: false,
    });
  },

  down: async (queryInterface) => {
    queryInterface.removeColumn('roles', 'created_at');
    queryInterface.removeColumn('roles', 'updated_at');
  },
};
