"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _Roles = require('../models/Roles'); var _Roles2 = _interopRequireDefault(_Roles);

exports. default = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required.'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const { id } = _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET);

    const userRoles = await _Roles2.default.findOne({ where: { user_id: id } });

    if (!userRoles || userRoles.role === 0) {
      return res.status(401).json({
        errors: ['User must be an Administrator.'],
      });
    }

    req.body.userId = id;

    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expired or invalid.'],
    });
  }
};
