"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLandscape = require("./FilledLandscape");

var _OutlineLandscape = require("./OutlineLandscape");

var _RoundLandscape = require("./RoundLandscape");

var _SharpLandscape = require("./SharpLandscape");

var _TwoToneLandscape = require("./TwoToneLandscape");

var Landscape =
/*#__PURE__*/
function Landscape(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLandscape.FilledLandscape, _OutlineLandscape.OutlineLandscape, _RoundLandscape.RoundLandscape, _SharpLandscape.SharpLandscape, _TwoToneLandscape.TwoToneLandscape);
};

exports.Landscape = Landscape;