"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledColorLens = require("./FilledColorLens");

var _OutlineColorLens = require("./OutlineColorLens");

var _RoundColorLens = require("./RoundColorLens");

var _SharpColorLens = require("./SharpColorLens");

var _TwoToneColorLens = require("./TwoToneColorLens");

var ColorLens =
/*#__PURE__*/
function ColorLens(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledColorLens.FilledColorLens, _OutlineColorLens.OutlineColorLens, _RoundColorLens.RoundColorLens, _SharpColorLens.SharpColorLens, _TwoToneColorLens.TwoToneColorLens);
};

exports.ColorLens = ColorLens;