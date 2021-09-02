import QuestionsAnswers from '../models/QuestionsAnswers';

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

      const questionAnswers = await QuestionsAnswers.create(req.body);

      return res.json(questionAnswers);
    } catch (e) {
      return res.status(400).json({
        errors: e.parent.text,
      });
    }
  }

  async index(req, res) {
    try {
      const Qanswers = await QuestionsAnswers.findAll({
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
      const Qanswers = await QuestionsAnswers.findByPk(req.params.id, {
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

export default new QanswersController();
