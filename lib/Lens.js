"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLens = require("./FilledLens");

var _OutlineLens = require("./OutlineLens");

var _RoundLens = require("./RoundLens");

var _SharpLens = require("./SharpLens");

var _TwoToneLens = require("./TwoToneLens");

var Lens =
/*#__PURE__*/
function Lens(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLens.FilledLens, _OutlineLens.OutlineLens, _RoundLens.RoundLens, _SharpLens.SharpLens, _TwoToneLens.TwoToneLens);
};

exports.Lens = Lens;