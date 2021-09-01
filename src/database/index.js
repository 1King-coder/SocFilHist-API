import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Student from '../models/Student';
import User from '../models/User';
import Roles from '../models/Roles';
import QuestionsAnswers from '../models/QuestionsAnswers';

const models = [Student, User, Roles, QuestionsAnswers];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
