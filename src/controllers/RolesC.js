import User from '../models/User';
import Roles from '../models/Roles';

require('dotenv').config();

class RolesController {
  async store(req, res) {
    try {
      const { user_id } = req.body;

      const role = await Roles.create({ role: 0, user_id });

      const user = await User.findOne({ where: { id: user_id } });

      return res.json({ role, user: { name: user.name, email: user.email } });
    } catch (e) {
      return res.json({
        errors: e.parent.text,
      });
    }
  }

  // eslint-disable-next-line
  async update(req, res) {
    const user = await Roles.findByPk(Number(req.params.id));

    if (!user) {
      return res.status(400).json({
        errors: ['User does not exists.'],
      });
    }

    if (user.role === 1) {
      return res.status(400).json({
        errors: ['User already an Administrator.'],
      });
    }

    if (req.params.option === 'ADM') return res.json(await user.update({ role: 1 }));

    if (req.params.option === 'INVITED') return res.json(await user.update({ role: 0 }));
  }
}

export default new RolesController();
