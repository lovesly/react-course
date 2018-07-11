'use strict';

var _utils = require('./utils.js');

var _utils2 = _interopRequireDefault(_utils);

var _person = require('./person.js');

var _person2 = _interopRequireDefault(_person);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// first
// 对象解构错误？addd: add
console.log("app.js is running!");
console.log((0, _utils.square)(4));
console.log((0, _utils.add)(3, 5));
console.log((0, _utils.mult)(3, 5));
console.log((0, _utils2.default)(5, 3));
// second
console.log((0, _person.isAdult)(17));
console.log((0, _person.canDrink)(22));
console.log((0, _person2.default)(66));
