"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledDirections = require("./FilledDirections");

var _OutlineDirections = require("./OutlineDirections");

var _RoundDirections = require("./RoundDirections");

var _SharpDirections = require("./SharpDirections");

var _TwoToneDirections = require("./TwoToneDirections");

var Directions =
/*#__PURE__*/
function Directions(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledDirections.FilledDirections, _OutlineDirections.OutlineDirections, _RoundDirections.RoundDirections, _SharpDirections.SharpDirections, _TwoToneDirections.TwoToneDirections);
};

exports.Directions = Directions;