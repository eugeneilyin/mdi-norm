"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPrint = require("./FilledPrint");

var _OutlinePrint = require("./OutlinePrint");

var _RoundPrint = require("./RoundPrint");

var _SharpPrint = require("./SharpPrint");

var _TwoTonePrint = require("./TwoTonePrint");

var Print =
/*#__PURE__*/
function Print(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPrint.FilledPrint, _OutlinePrint.OutlinePrint, _RoundPrint.RoundPrint, _SharpPrint.SharpPrint, _TwoTonePrint.TwoTonePrint);
};

exports.Print = Print;