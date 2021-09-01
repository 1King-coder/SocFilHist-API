module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('students', 'created_at', {
      type: Sequelize.DATE,
      allowNull: false,
    });
    await queryInterface.addColumn('students', 'updated_at', {
      type: Sequelize.DATE,
      allowNull: false,
    });
  },

  down: async (queryInterface) => {
    queryInterface.removeColumn('students', 'created_at');
    queryInterface.removeColumn('students', 'updated_at');
  },
};
