"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledMinimize = require("./FilledMinimize");

var _OutlineMinimize = require("./OutlineMinimize");

var _RoundMinimize = require("./RoundMinimize");

var _SharpMinimize = require("./SharpMinimize");

var _TwoToneMinimize = require("./TwoToneMinimize");

var Minimize =
/*#__PURE__*/
function Minimize(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledMinimize.FilledMinimize, _OutlineMinimize.OutlineMinimize, _RoundMinimize.RoundMinimize, _SharpMinimize.SharpMinimize, _TwoToneMinimize.TwoToneMinimize);
};

exports.Minimize = Minimize;