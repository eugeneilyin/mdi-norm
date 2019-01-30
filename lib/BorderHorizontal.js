"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledBorderHorizontal = require("./FilledBorderHorizontal");

var _OutlineBorderHorizontal = require("./OutlineBorderHorizontal");

var _RoundBorderHorizontal = require("./RoundBorderHorizontal");

var _SharpBorderHorizontal = require("./SharpBorderHorizontal");

var _TwoToneBorderHorizontal = require("./TwoToneBorderHorizontal");

var BorderHorizontal =
/*#__PURE__*/
function BorderHorizontal(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledBorderHorizontal.FilledBorderHorizontal, _OutlineBorderHorizontal.OutlineBorderHorizontal, _RoundBorderHorizontal.RoundBorderHorizontal, _SharpBorderHorizontal.SharpBorderHorizontal, _TwoToneBorderHorizontal.TwoToneBorderHorizontal);
};

exports.BorderHorizontal = BorderHorizontal;