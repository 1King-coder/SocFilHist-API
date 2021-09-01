import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      return res.json(newUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.parent.text,
      });
    }
  }

  async update(req, res) {
    try {
      const id = req.userId;
      if (!id) return res.status(400).json({ errors: ['Login Required.'] });

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json({
          errors: ['User does not exists.'],
        });
      }

      return res.json(await user.update(req.body));
    } catch (e) {
      return res.status(400).json({
        errors: e.parent.text,
      });
    }
  }
}

export default new UserController();
