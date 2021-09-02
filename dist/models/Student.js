"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Student extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      fullname: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo fullName tem que ter entre 3 e 255 caracteres e conter seu nome todo.',
          },
        },
      },
      age: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade tem que ser um numero inteiro.',
          },
        },
      },
      grade: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [2, 255],
            msg: 'Campo grade tem que conter entre 2 e 255 caracteres e conter sua turma.',
          },
        },
      },
      status: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [2, 255],
            msg: 'Você deve inserir seu status.',
          },
        },
      },
      genre: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [2, 255],
            msg: 'Você deve inserir seu gênero.',
          },
        },
      },
    }, { sequelize });
    return this;
  }

  static associate(models) {
    this.hasOne(models.QuestionsAnswers, { foreignKey: 'student_id' });
  }
} exports.default = Student;
