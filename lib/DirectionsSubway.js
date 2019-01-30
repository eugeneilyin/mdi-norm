"use strict";

exports.__esModule = true;

var _createThemedIcon = require("./utils/createThemedIcon");

var _FilledDirectionsSubway = require("./FilledDirectionsSubway");

var _OutlineDirectionsSubway = require("./OutlineDirectionsSubway");

var _RoundDirectionsSubway = require("./RoundDirectionsSubway");

var _SharpDirectionsSubway = require("./SharpDirectionsSubway");

var _TwoToneDirectionsSubway = require("./TwoToneDirectionsSubway");

var DirectionsSubway =
/*#__PURE__*/
function DirectionsSubway(props) {
  return (0, _createThemedIcon.createThemedIcon)(props, _FilledDirectionsSubway.FilledDirectionsSubway, _OutlineDirectionsSubway.OutlineDirectionsSubway, _RoundDirectionsSubway.RoundDirectionsSubway, _SharpDirectionsSubway.SharpDirectionsSubway, _TwoToneDirectionsSubway.TwoToneDirectionsSubway);
};

exports.DirectionsSubway = DirectionsSubway;