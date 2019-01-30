"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledAspectRatio = require("./FilledAspectRatio");

var _OutlineAspectRatio = require("./OutlineAspectRatio");

var _RoundAspectRatio = require("./RoundAspectRatio");

var _SharpAspectRatio = require("./SharpAspectRatio");

var _TwoToneAspectRatio = require("./TwoToneAspectRatio");

var AspectRatio =
/*#__PURE__*/
function AspectRatio(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledAspectRatio.FilledAspectRatio, _OutlineAspectRatio.OutlineAspectRatio, _RoundAspectRatio.RoundAspectRatio, _SharpAspectRatio.SharpAspectRatio, _TwoToneAspectRatio.TwoToneAspectRatio);
};

exports.AspectRatio = AspectRatio;