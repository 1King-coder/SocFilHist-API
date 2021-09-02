"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _QanswersC = require('../controllers/QanswersC'); var _QanswersC2 = _interopRequireDefault(_QanswersC);

const router = new (0, _express.Router)();

router.post('/', _QanswersC2.default.store);
router.get('/retrieveData', _QanswersC2.default.index);

exports. default = router;

/*
index -> List the whole table
store/create -> create a new one
delete -> delete one
show -> shows only a specific one
update -> update
*/
