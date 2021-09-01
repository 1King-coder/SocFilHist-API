"use strict";module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('questions_answers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      student_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'student',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      Q1: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Q2: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Q3: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Q4: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Q5: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Q6: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Q7: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Q8: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Q9: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Q10: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => queryInterface.dropTable('questions_answers'),

};
