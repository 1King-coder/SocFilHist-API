import Sequelize, { Model } from 'sequelize';

export default class Student extends Model {
  static init(sequelize) {
    super.init({
      fullname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo fullName tem que ter entre 3 e 255 caracteres e conter seu nome todo.',
          },
        },
      },
      age: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade tem que ser um numero inteiro.',
          },
        },
      },
      grade: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [2, 255],
            msg: 'Campo grade tem que conter entre 2 e 255 caracteres e conter sua turma.',
          },
        },
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [2, 255],
            msg: 'Você deve inserir seu status.',
          },
        },
      },
      genre: {
        type: Sequelize.STRING,
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
}
