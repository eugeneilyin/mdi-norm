"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledMaximize = require("./FilledMaximize");

var _OutlineMaximize = require("./OutlineMaximize");

var _RoundMaximize = require("./RoundMaximize");

var _SharpMaximize = require("./SharpMaximize");

var _TwoToneMaximize = require("./TwoToneMaximize");

var Maximize =
/*#__PURE__*/
function Maximize(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledMaximize.FilledMaximize, _OutlineMaximize.OutlineMaximize, _RoundMaximize.RoundMaximize, _SharpMaximize.SharpMaximize, _TwoToneMaximize.TwoToneMaximize);
};

exports.Maximize = Maximize;