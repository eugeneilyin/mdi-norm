"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _Filled = require("./Filled360");

var _Outline = require("./Outline360");

var _Round = require("./Round360");

var _Sharp = require("./Sharp360");

var _TwoTone = require("./TwoTone360");

var Icon360 =
/*#__PURE__*/
function Icon360(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _Filled.Filled360, _Outline.Outline360, _Round.Round360, _Sharp.Sharp360, _TwoTone.TwoTone360);
};

exports.Icon360 = Icon360;