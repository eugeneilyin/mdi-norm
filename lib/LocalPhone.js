"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLocalPhone = require("./FilledLocalPhone");

var _OutlineLocalPhone = require("./OutlineLocalPhone");

var _RoundLocalPhone = require("./RoundLocalPhone");

var _SharpLocalPhone = require("./SharpLocalPhone");

var _TwoToneLocalPhone = require("./TwoToneLocalPhone");

var LocalPhone =
/*#__PURE__*/
function LocalPhone(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLocalPhone.FilledLocalPhone, _OutlineLocalPhone.OutlineLocalPhone, _RoundLocalPhone.RoundLocalPhone, _SharpLocalPhone.SharpLocalPhone, _TwoToneLocalPhone.TwoToneLocalPhone);
};

exports.LocalPhone = LocalPhone;