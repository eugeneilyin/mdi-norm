"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledCommute = require("./FilledCommute");

var _OutlineCommute = require("./OutlineCommute");

var _RoundCommute = require("./RoundCommute");

var _SharpCommute = require("./SharpCommute");

var _TwoToneCommute = require("./TwoToneCommute");

var Commute =
/*#__PURE__*/
function Commute(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledCommute.FilledCommute, _OutlineCommute.OutlineCommute, _RoundCommute.RoundCommute, _SharpCommute.SharpCommute, _TwoToneCommute.TwoToneCommute);
};

exports.Commute = Commute;