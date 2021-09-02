"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _StudentC = require('../controllers/StudentC'); var _StudentC2 = _interopRequireDefault(_StudentC);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);
var _admRequired = require('../middlewares/admRequired'); var _admRequired2 = _interopRequireDefault(_admRequired);

const router = new (0, _express.Router)();

router.get('/', _loginRequired2.default, _StudentC2.default.index);
router.get('/:id', _StudentC2.default.show);
router.post('/', _StudentC2.default.store);
router.delete('/:id', _loginRequired2.default, _admRequired2.default, _StudentC2.default.delete);

/*
index -> List the whole table
store/create -> create a new one
delete -> delete one
show -> shows only a specific one
update -> update
*/

exports. default = router;
