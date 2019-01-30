"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledLayers = require("./FilledLayers");

var _OutlineLayers = require("./OutlineLayers");

var _RoundLayers = require("./RoundLayers");

var _SharpLayers = require("./SharpLayers");

var _TwoToneLayers = require("./TwoToneLayers");

var Layers =
/*#__PURE__*/
function Layers(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledLayers.FilledLayers, _OutlineLayers.OutlineLayers, _RoundLayers.RoundLayers, _SharpLayers.SharpLayers, _TwoToneLayers.TwoToneLayers);
};

exports.Layers = Layers;