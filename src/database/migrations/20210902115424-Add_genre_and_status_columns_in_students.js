module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('students', 'genre', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('students', 'status', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('students', 'genre');
    await queryInterface.removeColumn('students', 'status');
  },
};
