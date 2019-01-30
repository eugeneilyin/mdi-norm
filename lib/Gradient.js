"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledGradient = require("./FilledGradient");

var _OutlineGradient = require("./OutlineGradient");

var _RoundGradient = require("./RoundGradient");

var _SharpGradient = require("./SharpGradient");

var _TwoToneGradient = require("./TwoToneGradient");

var Gradient =
/*#__PURE__*/
function Gradient(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledGradient.FilledGradient, _OutlineGradient.OutlineGradient, _RoundGradient.RoundGradient, _SharpGradient.SharpGradient, _TwoToneGradient.TwoToneGradient);
};

exports.Gradient = Gradient;