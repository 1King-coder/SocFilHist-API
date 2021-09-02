import Student from '../models/Student';

const tOrder = [['id', 'DESC']];

class StudentController {
  async index(req, res) {
    try {
      const students = await Student.findAll({ order: tOrder, attributes: ['id', 'fullname', 'age', 'grade'] });
      return res.json(students);
    } catch (e) {
      return res.status(400).json({
        errors: e.parent.text,
      });
    }
  }

  async store(req, res) {
    try {
      const student = await Student.create(req.body);
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

      const student = await Student.findByPk(id, { order: tOrder });

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

      const student = await Student.findByPk(id);

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
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID.'],
        });
      }

      const student = await Student.findByPk(Number(id));

      if (!student) {
        return res.status(400).json({
          errors: ['Student does not exists.'],
        });
      }

      return res.json(await student.update(req.body));
    } catch (e) {
      return res.status(400).json({
        errors: e.parent.text,
      });
    }
  }
}

export default new StudentController();
