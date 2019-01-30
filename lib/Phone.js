"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPhone = require("./FilledPhone");

var _OutlinePhone = require("./OutlinePhone");

var _RoundPhone = require("./RoundPhone");

var _SharpPhone = require("./SharpPhone");

var _TwoTonePhone = require("./TwoTonePhone");

var Phone =
/*#__PURE__*/
function Phone(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPhone.FilledPhone, _OutlinePhone.OutlinePhone, _RoundPhone.RoundPhone, _SharpPhone.SharpPhone, _TwoTonePhone.TwoTonePhone);
};

exports.Phone = Phone;