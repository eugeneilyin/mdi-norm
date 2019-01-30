"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledVisibility = require("./FilledVisibility");

var _OutlineVisibility = require("./OutlineVisibility");

var _RoundVisibility = require("./RoundVisibility");

var _SharpVisibility = require("./SharpVisibility");

var _TwoToneVisibility = require("./TwoToneVisibility");

var Visibility =
/*#__PURE__*/
function Visibility(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledVisibility.FilledVisibility, _OutlineVisibility.OutlineVisibility, _RoundVisibility.RoundVisibility, _SharpVisibility.SharpVisibility, _TwoToneVisibility.TwoToneVisibility);
};

exports.Visibility = Visibility;