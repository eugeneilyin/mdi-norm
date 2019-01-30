"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledColorize = require("./FilledColorize");

var _OutlineColorize = require("./OutlineColorize");

var _RoundColorize = require("./RoundColorize");

var _SharpColorize = require("./SharpColorize");

var _TwoToneColorize = require("./TwoToneColorize");

var Colorize =
/*#__PURE__*/
function Colorize(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledColorize.FilledColorize, _OutlineColorize.OutlineColorize, _RoundColorize.RoundColorize, _SharpColorize.SharpColorize, _TwoToneColorize.TwoToneColorize);
};

exports.Colorize = Colorize;