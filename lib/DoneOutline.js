"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledDoneOutline = require("./FilledDoneOutline");

var _OutlineDoneOutline = require("./OutlineDoneOutline");

var _RoundDoneOutline = require("./RoundDoneOutline");

var _SharpDoneOutline = require("./SharpDoneOutline");

var _TwoToneDoneOutline = require("./TwoToneDoneOutline");

var DoneOutline =
/*#__PURE__*/
function DoneOutline(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledDoneOutline.FilledDoneOutline, _OutlineDoneOutline.OutlineDoneOutline, _RoundDoneOutline.RoundDoneOutline, _SharpDoneOutline.SharpDoneOutline, _TwoToneDoneOutline.TwoToneDoneOutline);
};

exports.DoneOutline = DoneOutline;