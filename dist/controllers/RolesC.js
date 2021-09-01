"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _Roles = require('../models/Roles'); var _Roles2 = _interopRequireDefault(_Roles);

require('dotenv').config();

class RolesController {
  async store(req, res) {
    try {
      const { user_id } = req.body;

      const role = await _Roles2.default.create({ role: 0, user_id });

      const user = await _User2.default.findOne({ where: { id: user_id } });

      return res.json({ role, user: { name: user.name, email: user.email } });
    } catch (e) {
      return res.json({
        errors: e.parent.text,
      });
    }
  }

  // eslint-disable-next-line
  async update(req, res) {
    const user = await _Roles2.default.findByPk(Number(req.params.id));

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

exports. default = new RolesController();
