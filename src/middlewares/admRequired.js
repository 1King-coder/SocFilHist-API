import jwt from 'jsonwebtoken';
import Roles from '../models/Roles';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required.'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const { id } = jwt.verify(token, process.env.TOKEN_SECRET);

    const userRoles = await Roles.findOne({ where: { user_id: id } });

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
