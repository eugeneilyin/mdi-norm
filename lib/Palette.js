"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledPalette = require("./FilledPalette");

var _OutlinePalette = require("./OutlinePalette");

var _RoundPalette = require("./RoundPalette");

var _SharpPalette = require("./SharpPalette");

var _TwoTonePalette = require("./TwoTonePalette");

var Palette =
/*#__PURE__*/
function Palette(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledPalette.FilledPalette, _OutlinePalette.OutlinePalette, _RoundPalette.RoundPalette, _SharpPalette.SharpPalette, _TwoTonePalette.TwoTonePalette);
};

exports.Palette = Palette;