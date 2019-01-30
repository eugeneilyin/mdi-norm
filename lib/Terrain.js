"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledTerrain = require("./FilledTerrain");

var _OutlineTerrain = require("./OutlineTerrain");

var _RoundTerrain = require("./RoundTerrain");

var _SharpTerrain = require("./SharpTerrain");

var _TwoToneTerrain = require("./TwoToneTerrain");

var Terrain =
/*#__PURE__*/
function Terrain(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledTerrain.FilledTerrain, _OutlineTerrain.OutlineTerrain, _RoundTerrain.RoundTerrain, _SharpTerrain.SharpTerrain, _TwoToneTerrain.TwoToneTerrain);
};

exports.Terrain = Terrain;