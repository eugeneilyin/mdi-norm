"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledAccessible = require("./FilledAccessible");

var _OutlineAccessible = require("./OutlineAccessible");

var _RoundAccessible = require("./RoundAccessible");

var _SharpAccessible = require("./SharpAccessible");

var _TwoToneAccessible = require("./TwoToneAccessible");

var Accessible =
/*#__PURE__*/
function Accessible(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledAccessible.FilledAccessible, _OutlineAccessible.OutlineAccessible, _RoundAccessible.RoundAccessible, _SharpAccessible.SharpAccessible, _TwoToneAccessible.TwoToneAccessible);
};

exports.Accessible = Accessible;