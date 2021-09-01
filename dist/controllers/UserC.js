"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  async store(req, res) {
    try {
      const newUser = await _User2.default.create(req.body);
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

      const user = await _User2.default.findByPk(id);

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

exports. default = new UserController();
