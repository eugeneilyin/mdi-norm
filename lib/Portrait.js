"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPortrait = require("./FilledPortrait");

var _OutlinePortrait = require("./OutlinePortrait");

var _RoundPortrait = require("./RoundPortrait");

var _SharpPortrait = require("./SharpPortrait");

var _TwoTonePortrait = require("./TwoTonePortrait");

var Portrait =
/*#__PURE__*/
function Portrait(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPortrait.FilledPortrait, _OutlinePortrait.OutlinePortrait, _RoundPortrait.RoundPortrait, _SharpPortrait.SharpPortrait, _TwoTonePortrait.TwoTonePortrait);
};

exports.Portrait = Portrait;