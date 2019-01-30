"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledScanner = require("./FilledScanner");

var _OutlineScanner = require("./OutlineScanner");

var _RoundScanner = require("./RoundScanner");

var _SharpScanner = require("./SharpScanner");

var _TwoToneScanner = require("./TwoToneScanner");

var Scanner =
/*#__PURE__*/
function Scanner(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledScanner.FilledScanner, _OutlineScanner.OutlineScanner, _RoundScanner.RoundScanner, _SharpScanner.SharpScanner, _TwoToneScanner.TwoToneScanner);
};

exports.Scanner = Scanner;