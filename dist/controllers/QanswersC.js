"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _QuestionsAnswers = require('../models/QuestionsAnswers'); var _QuestionsAnswers2 = _interopRequireDefault(_QuestionsAnswers);

require('dotenv').config();

class QanswersController {
  async store(req, res) {
    try {
      const { student_id } = req.body;

      if (!student_id) {
        return res.status(400).json({
          errors: ['Student does not exists (answers).'],
        });
      }

      const questionAnswers = await _QuestionsAnswers2.default.create(req.body);

      return res.json(questionAnswers);
    } catch (e) {
      return res.status(400).json({
        errors: e.parent.text,
      });
    }
  }

  async index(req, res) {
    try {
      const Qanswers = await _QuestionsAnswers2.default.findAll({
        attributes: ['student_id', 'Q1', 'Q2', 'Q3', 'Q4',
          'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10'],
      });

      return res.json(Qanswers);
    } catch (e) {
      return res.status(400).json({
        errors: e.parent.text,
      });
    }
  }

  async show(req, res) {
    try {
      const Qanswers = await _QuestionsAnswers2.default.findOne({
        where: { student_id: Number(req.params.id) },
        attributes: ['student_id'],
      });

      return res.json(Qanswers);
    } catch (e) {
      return res.status(400).json({
        errors: e.parent.text,
      });
    }
  }
}

exports. default = new QanswersController();
