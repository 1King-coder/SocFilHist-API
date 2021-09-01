"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Student = require('../models/Student'); var _Student2 = _interopRequireDefault(_Student);

const tOrder = [['id', 'DESC']];

class StudentController {
  async index(req, res) {
    try {
      const students = await _Student2.default.findAll({ order: tOrder });
      return res.json(students);
    } catch (e) {
      return res.status(400).json({
        errors: e.parent.text,
      });
    }
  }

  async store(req, res) {
    try {
      const student = await _Student2.default.create(req.body);
      return res.json(student);
    } catch (e) {
      return res.status(400).json({
        errors: e.parent.text,
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID.'],
        });
      }

      const student = await _Student2.default.findByPk(id, { order: tOrder });

      if (!student) {
        return res.status(400).json({
          errors: ['Student does not exists.'],
        });
      }

      return res.json(student);
    } catch (e) {
      return res.status(400).json({
        errors: e.parent.text,
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID.'],
        });
      }

      const student = await _Student2.default.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ['Student does not exists.'],
        });
      }

      await student.destroy();
      return res.json({ Success: 'User successfully deleted' });
    } catch (e) {
      return res.status(400).json({
        errors: e.parent.text,
      });
    }
  }

  // eslint-disable-next-line
  async update(req, res) {
    const student = await _Student2.default.findByPk(Number(req.params.id));

    if (!student) {
      return res.status(400).json({
        errors: ['Student does not exists.'],
      });
    }

    return res.json(await student.update(req.body));
  }
}

exports. default = new StudentController();
