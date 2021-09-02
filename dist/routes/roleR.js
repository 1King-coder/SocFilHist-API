"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _RolesC = require('../controllers/RolesC'); var _RolesC2 = _interopRequireDefault(_RolesC);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);
var _admRequired = require('../middlewares/admRequired'); var _admRequired2 = _interopRequireDefault(_admRequired);

const router = new (0, _express.Router)();

router.post('/', _RolesC2.default.store);
router.put('/:option/:id', _loginRequired2.default, _admRequired2.default, _RolesC2.default.update);

/*
index -> List the whole table
store/create -> create a new one
delete -> delete one
show -> shows only a specific one
update -> update
*/

exports. default = router;
