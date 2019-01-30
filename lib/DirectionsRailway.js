"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledDirectionsRailway = require("./FilledDirectionsRailway");

var _OutlineDirectionsRailway = require("./OutlineDirectionsRailway");

var _RoundDirectionsRailway = require("./RoundDirectionsRailway");

var _SharpDirectionsRailway = require("./SharpDirectionsRailway");

var _TwoToneDirectionsRailway = require("./TwoToneDirectionsRailway");

var DirectionsRailway =
/*#__PURE__*/
function DirectionsRailway(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledDirectionsRailway.FilledDirectionsRailway, _OutlineDirectionsRailway.OutlineDirectionsRailway, _RoundDirectionsRailway.RoundDirectionsRailway, _SharpDirectionsRailway.SharpDirectionsRailway, _TwoToneDirectionsRailway.TwoToneDirectionsRailway);
};

exports.DirectionsRailway = DirectionsRailway;