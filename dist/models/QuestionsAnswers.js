"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class QuestionsAnswers extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      Q1: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'You must answer the whole questionary.',
          },
        },
      },
      Q2: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'You must answer the whole questionary.',
          },
        },
      },
      Q3: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'You must answer the whole questionary.',
          },
        },
      },
      Q4: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'You must answer the whole questionary.',
          },
        },
      },
      Q5: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'You must answer the whole questionary.',
          },
        },
      },
      Q6: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'You must answer the whole questionary.',
          },
        },
      },
      Q7: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'You must answer the whole questionary.',
          },
        },
      },
      Q8: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'You must answer the whole questionary.',
          },
        },
      },
      Q9: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'You must answer the whole questionary.',
          },
        },
      },
      Q10: {
        type: _sequelize2.default.INTEGER,
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
} exports.default = QuestionsAnswers;
