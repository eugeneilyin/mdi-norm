"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledBrush = require("./FilledBrush");

var _OutlineBrush = require("./OutlineBrush");

var _RoundBrush = require("./RoundBrush");

var _SharpBrush = require("./SharpBrush");

var _TwoToneBrush = require("./TwoToneBrush");

var Brush =
/*#__PURE__*/
function Brush(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledBrush.FilledBrush, _OutlineBrush.OutlineBrush, _RoundBrush.RoundBrush, _SharpBrush.SharpBrush, _TwoToneBrush.TwoToneBrush);
};

exports.Brush = Brush;