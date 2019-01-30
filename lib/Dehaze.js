"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledDehaze = require("./FilledDehaze");

var _OutlineDehaze = require("./OutlineDehaze");

var _RoundDehaze = require("./RoundDehaze");

var _SharpDehaze = require("./SharpDehaze");

var _TwoToneDehaze = require("./TwoToneDehaze");

var Dehaze =
/*#__PURE__*/
function Dehaze(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledDehaze.FilledDehaze, _OutlineDehaze.OutlineDehaze, _RoundDehaze.RoundDehaze, _SharpDehaze.SharpDehaze, _TwoToneDehaze.TwoToneDehaze);
};

exports.Dehaze = Dehaze;