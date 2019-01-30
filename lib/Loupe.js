"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLoupe = require("./FilledLoupe");

var _OutlineLoupe = require("./OutlineLoupe");

var _RoundLoupe = require("./RoundLoupe");

var _SharpLoupe = require("./SharpLoupe");

var _TwoToneLoupe = require("./TwoToneLoupe");

var Loupe =
/*#__PURE__*/
function Loupe(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLoupe.FilledLoupe, _OutlineLoupe.OutlineLoupe, _RoundLoupe.RoundLoupe, _SharpLoupe.SharpLoupe, _TwoToneLoupe.TwoToneLoupe);
};

exports.Loupe = Loupe;