"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledVignette = require("./FilledVignette");

var _OutlineVignette = require("./OutlineVignette");

var _RoundVignette = require("./RoundVignette");

var _SharpVignette = require("./SharpVignette");

var _TwoToneVignette = require("./TwoToneVignette");

var Vignette =
/*#__PURE__*/
function Vignette(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledVignette.FilledVignette, _OutlineVignette.OutlineVignette, _RoundVignette.RoundVignette, _SharpVignette.SharpVignette, _TwoToneVignette.TwoToneVignette);
};

exports.Vignette = Vignette;