import Sequelize, { Model } from 'sequelize';

export default class QuestionsAnswers extends Model {
  static init(sequelize) {
    super.init({
      Q1: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'You must answer the whole questionary.',
          },
        },
      },
      Q2: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'You must answer the whole questionary.',
          },
        },
      },
      Q3: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'You must answer the whole questionary.',
          },
        },
      },
      Q4: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'You must answer the whole questionary.',
          },
        },
      },
      Q5: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'You must answer the whole questionary.',
          },
        },
      },
      Q6: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'You must answer the whole questionary.',
          },
        },
      },
      Q7: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'You must answer the whole questionary.',
          },
        },
      },
      Q8: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'You must answer the whole questionary.',
          },
        },
      },
      Q9: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'You must answer the whole questionary.',
          },
        },
      },
      Q10: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'You must answer the whole questionary.',
          },
        },
      },

    }, {
      sequelize,
      tableName: 'questions_answers',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id' });
  }
}
