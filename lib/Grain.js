"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledGrain = require("./FilledGrain");

var _OutlineGrain = require("./OutlineGrain");

var _RoundGrain = require("./RoundGrain");

var _SharpGrain = require("./SharpGrain");

var _TwoToneGrain = require("./TwoToneGrain");

var Grain =
/*#__PURE__*/
function Grain(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledGrain.FilledGrain, _OutlineGrain.OutlineGrain, _RoundGrain.RoundGrain, _SharpGrain.SharpGrain, _TwoToneGrain.TwoToneGrain);
};

exports.Grain = Grain;